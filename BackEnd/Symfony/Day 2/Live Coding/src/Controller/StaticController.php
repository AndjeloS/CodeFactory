<?php

namespace App\Controller;

use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class StaticController extends AbstractController
{
    #[Route('/home', name: 'app_home')]
    public function index(): Response
    {
        $firstName ="John";
        $items = ['Jacket','Hat','Bag'];
        $itemsNew = [
            ["id" => 1, "name" => "Jacket", "availability" => true],
            ["id" => 2, "name" => "Hat", "availability" => false],
            ["id" => 3, "name" => "Bag", "availability" => true],
        ];
        return $this->render('static/index.html.twig', [
            'name' => $firstName,
            'itemArray' => $items,
            'newItemArray' => $itemsNew
        ]);
    }

    #[Route('/about', name: 'app_about')]
    public function showAboutPage(): Response
    {
        return $this->render('static/about.html.twig', [
        ]);
    }

    #[Route('/contact', name: 'app_contact')]
    public function showContactPage(): Response
    {
        return $this->render('static/contact.html.twig', [
        ]);
    }

    #[Route('/product', name: 'app_product')]
    public function showProductPage(ProductRepository $productRepository): Response
    {
        $products = $productRepository->findAll();
        return $this->render('static/product.html.twig', [
            "productsArr" => $products
        ]);
    }
}
