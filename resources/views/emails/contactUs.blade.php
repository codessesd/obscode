<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us Email</title>

    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
        }
        .banner {
          background-color: #f87171;
          height: 200px;
          padding: 10px;
          border-radius: 10px;
          display: grid;
          place-items: center;
        }
        .content-body {
          padding: 10px;
          background-color: #FFF;
          margin-top: 20px;
          border-radius: 10px;
          display: grid;
          place-items: center;
        }
        .content-inner {
          /*min-width: 400px;*/
          text-align: center;
          max-width: 700px;
        }
        .labels {
          width: 130px;
          display: inline-block;
        }
        .msg-par{
          border: 1px solid #f87171;
          padding: 10px;
          border-radius: 10px;
        }
        h2 {
            color: #FFF;
        }

        p {
            margin-bottom: 10px;
        }

        strong {
            color: #f87171;
        }
    </style>
</head>
<body>

  <div class="banner">
    <h2>Contact Us Form Submission</h2>
  </div>
  <div class="content-body">
    <div class="content-inner">
      <p><strong class="labels">Name</strong> <br>{{ $data['name'] }}</p>
      <p><strong class="labels">Lastname</strong> <br> {{ $data['lastname']  }}</p>
      <p><strong class="labels">Company</strong> <br> {{ $data['company']  }}</p>
      <p><strong class="labels">Email</strong> <br> <a href="{{ $data['email']  }}">{{ $data['email']  }}</a></p>
      <p><strong class="labels">Phone Number</strong> <br> {{ $data['phone'] }}</p>
      
      <p><strong>Message</strong></p>
      <p class="msg-par">{{ $data['message']  }}</p>
    </div>
  </div>

    

</body>
</html>
