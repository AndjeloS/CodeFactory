<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class HomeController extends AbstractController
{
    
    #[Route('/', name: 'app_home')]
    public function index(): Response
    {   
        $x = random_int(0,1000);
        return $this->render('home/index.html.twig', [
            'name' => 'Andjelo',
            'random_number' => $x,
        ]);
    }

    #[Route('/random/{max}', name: 'app_random')]
    public function showRandomNumber($max): Response
    {
        $number = random_int(0,$max);
        return $this->render('home/random.html.twig', [
            "random_number" => $number,
            "max_number" => $max,
        ]);
    }
}
