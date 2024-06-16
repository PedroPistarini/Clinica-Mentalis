<!-- resources/views/emails/nome_do_email.blade.php -->
<!DOCTYPE html>
<html>
<head>
    <title>Email de Contato - Clinica Mentalis</title>
</head>
<body>
    <h1>Você recebeu uma nova mensagem de contato</h1>
    <p><strong>Nome:</strong> {{ $name }}</p>
    <p><strong>Email:</strong> {{ $email }}</p>
    <p><strong>Descrição:</strong> {{ $description }}</p>
</body>
</html>
