<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class NomeDoEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $data;

    public function __construct($data)
    {
        $this->data = $data;
    }

    public function build()
    {
        return $this->view('emails.nomedoemail')
                    ->with([
                        'name' => $this->data['name'],
                        'email' => $this->data['email'],
                        'description' => $this->data['description'],
                    ]);
    }
}
