<?php
header("content-type: application/json; charset=utf-8");
$name=isset($_POST['name']) ? $_POST['name'] : "";
$email=isset($_POST['email']) ? $_POST['email'] : "";
$message=isset($_POST['message']) ? $_POST['message'] : "";

    if(!preg_match('/^[A-Za-zĄĘĆŁŃÓŚŻŹąęćłńóśżź]{1,15}+ [A-Za-zĄĘĆŁŃÓŚŻŹąęćłńóśżź]{1,15}$/', $name)){
    $json=array("msg"=>"<p <p class='status_err'> Proszę podać poprawne dane </p>");}
    elseif(!preg_match('/^[a-z]{1,15}+@[a-z]{1,5}+.[a-z]{1,4}$/', $email)){
        $json=array("msg"=>"<p class='status_err'> Proszę podać poprawne dane</p>");}

    elseif($name && $email && $message){
        $headers = "MIME-Version: 1.0\r\nContent-type: text/plain; charset=utf-8\r\nContent-Transfer-Encoding: 8bit";
        $message_body="Współpraca ze strony andzelika-botwina.pl\n";
        $message_body.="Imię i nazwisko: $name\n";
        $message_body.="Adres email: $email\n";
        $message_body.=$message;

        if(mail("Andzelalala@gmail.com","Współpraca",$message_body,$headers)){
        $json=array("status"=>1,"msg"=>"<p class='status_ok'>Twoja wiadomość została wysłana pomyślnie</p>");
        }
        else{
        $json=array("status"=>0,"msg"=>"<p class='status_err'>Wystąpił problem z wysłaniem wiadomości</p>"); 
        }
    }
   
    else{
    $json=array("status"=>0,"msg"=>"<p class='status_err'>Proszę wypełnić wszystkie pola przed wysłaniem</p>"); 
    }
echo json_encode($json);
exit;
?>

<!-- elseif(!preg_match('/^[A-Za-zĄĘĆŁŃÓŚŻŹąęćłńóśżź]{1,15}$/', $imie)) 
         {
            echo "<p style=\"color:purple\"> Proszę wypełnić poprawnie pole IMIĘ </p>";}  -->


    <!-- if(!preg_match('/^[A-Za-zĄĘĆŁŃÓŚŻŹąęćłńóśżź]{1,15}$/, $name)){
    $json=array("msg"=>"<p style=\"color:purple\"> Proszę wypełnić poprawnie pole IMIĘ </p>");} -->