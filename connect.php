<?php
$namahotel = $_POST['namahotel'];
$orang = $_POST['orang'];
$kamar = $_POST['kamar'];
$bed_type = $_POST['bed_type'];
$tanggal_chekin = $_POST['tanggal_chekin'];
$tanggal_chekout = $_POST['tanggal_chekout'];

//koneksi databaase
$conn = new mysqli('localhost', 'root', '','web_tripvel')
if($conn->connect_error){
    die('Connection Failed : '.$conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into booking(namahotel, orang, kamar, bed_type, tanggal_chekin, tanggal_chekout)
    values(?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("siisii",$namahotel,$orang,$kamar,$bed_type,$tanggal_chekin,$tanggal_chekout);
    $stmt->execute();
    echo "Booking Successfully....";
    $stmt->close();
    $conn->close();  

}
?>