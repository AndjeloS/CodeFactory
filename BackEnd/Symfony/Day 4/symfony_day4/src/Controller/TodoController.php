<?php

namespace App\Controller;

use App\Entity\Status;
use App\Entity\Todo;
use App\Form\TodoType;
use App\Repository\TodoRepository;
use App\Service\FileUploader;
use DateTime as GlobalDateTime;
use Doctrine\DBAL\Types\DateType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Validator\Constraints\DateTime;

#[Route('/todo')]
class TodoController extends AbstractController
{
    #[Route('/', name: 'app_todo_index', methods: ['GET'])]
    public function index(TodoRepository $todoRepository): Response
    {   
        $todo = $todoRepository->findAll();
        // dd($todo);
        return $this->render('todo/index.html.twig', [
            'todos' => $todo,
        ]);
    }

    #[Route('/new', name: 'app_todo_new', methods: ['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager, FileUploader $fileUploader): Response
    {
        $todo = new Todo();
        $status = $entityManager ->getRepository(Status::class)->find(1);
        $todo ->setFkStatus($status);
        $form = $this->createForm(TodoType::class, $todo);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $today = new GlobalDateTime('now');
            $todo->setCreatedAt($today);

            $pictureFile = $form->get('picture')->getData();
        if ($pictureFile) {
            $pictureFileName = $fileUploader->upload($pictureFile);
            $todo->setPicture($pictureFileName);
        }else{
            $todo->setPicture("todo.jpg");
        }
            $entityManager->persist($todo);
            $entityManager->flush();

            return $this->redirectToRoute('app_todo_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('todo/new.html.twig', [
            'todo' => $todo,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_todo_show', methods: ['GET'])]
    public function show(Todo $todo): Response
    {   
        $status = $todo->getFkStatus();
        return $this->render('todo/show.html.twig', [
            'todo' => $todo,
            'status' => $status
        ]);
    }

    #[Route('/{id}/edit', name: 'app_todo_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Todo $todo, EntityManagerInterface $entityManager, FileUploader $fileUploader): Response
    {
        $form = $this->createForm(TodoType::class, $todo);
        $form->handleRequest($request);

        $pictureFile = $form->get('picture')->getData();
        if ($pictureFile) {
            if($todo->getPicture() != "todo.jpg"){
                unlink($this->getParameter("brochures_directory"). "/" . $todo->getPicture());
            }
            $pictureFileName = $fileUploader->upload($pictureFile);
            $todo->setPicture($pictureFileName);
        }

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->flush();

            return $this->redirectToRoute('app_todo_index', [], Response::HTTP_SEE_OTHER);
        }

        return $this->render('todo/edit.html.twig', [
            'todo' => $todo,
            'form' => $form,
        ]);
    }

    #[Route('/{id}', name: 'app_todo_delete', methods: ['POST'])]
    public function delete(Request $request, Todo $todo, EntityManagerInterface $entityManager): Response
    {
        if ($this->isCsrfTokenValid('delete'.$todo->getId(), $request->getPayload()->getString('_token'))) {
            if($todo->getPicture() != "todo.jpg"){
                unlink($this->getParameter("brochures_directory"). "/" . $todo->getPicture());
            }
            $entityManager->remove($todo);
            $entityManager->flush();
        }

        return $this->redirectToRoute('app_todo_index', [], Response::HTTP_SEE_OTHER);
    }
}
