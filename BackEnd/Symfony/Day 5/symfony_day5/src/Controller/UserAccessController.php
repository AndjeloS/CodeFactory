<?php

namespace App\Controller;

use App\Entity\Product;
use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/user')]
class UserAccessController extends AbstractController
{
    #[Route('/', name: 'app_user_access')]
    public function index(): Response
    {
        $user = $this->getUser();
        return $this->render('user_access/home.html.twig', [
            'user' => $user,
        ]);
    }

    #[Route('/about', name: 'app_user_about')]
    public function showAbout(): Response
    {
        $user = $this->getUser();
        return $this->render('user_access/about.html.twig', [
            'user' => $user,
        ]);
    }

    #[Route('/products', name: 'app_user_products')]
    public function showProducts(ProductRepository $productRepository): Response
    {
        $products = $productRepository->findAll();
        return $this->render('user_access/products.html.twig', [
            'products' => $products
        ]);
    }

    #[Route('/details/{id}', name: 'app_user_detail')]
    public function showDetails(Product $product): Response
    {
        
        return $this->render('user_access/product_detail.html.twig', [
            'product' => $product
        ]);
    }
    
}
