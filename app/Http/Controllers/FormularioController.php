<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\NomeDoEmail;

class FormularioController extends Controller
{
    public function exibirFormulario()
    {
        return view('formulario');
    }

    public function enviarEmail(Request $request)
    {
        // Validação dos dados do formulário
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'description' => 'required|string|max:1000',
        ]);

        try {
            // Envio do email
            Mail::to('be5026967c-1e6463@inbox.mailtrap.io')->send(new NomeDoEmail($request->all()));

            // Resposta de sucesso
            return response()->json(['message' => 'Email enviado com sucesso!'], 200);
        } catch (\Exception $e) {
            // Tratamento de exceção
            return response()->json(['message' => 'Erro ao enviar o email: ' . $e->getMessage()], 500);
        }
    }
}
