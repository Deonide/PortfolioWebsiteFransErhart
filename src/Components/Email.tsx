<!Doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Component</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <!-- Internal Styling  -->
     <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: sans-serif;
            background-color: #f4f4f4;
            color: #333;
            line-height: 1.6;
        }

        .email-container {
            max-width: 600px;
            margin: auto;
            background-color: #fff;
            padding: 20px 40px;
        }

        .header{
            width: 100%;
            margin-bottom: 5px;
        }

        .header .logo img{
            width: 45px;
            float: left;
        }

        .header .link-to-website{
            float: right;
            font-size: 14px;
            margin-top: 25px;
        }

        .hero-content img{
            width: 100%;
            height: 100%;
        }

        .content .title{
            font-weight: 600;
            font-size: 22px;
            color: #333;
        }

        .content p{
            margin-bottom: 15px;
            line-height: 1.5;
            font-size: 14px;
            text-align: center;
            color: grey;
        }

        .signature{
            margin-bottom: 15px;
            margin-top: 22px;
            border-bottom: 1px solid gainsboro;
            padding-bottom: 20px;
            text-align: center;
            color: gray;
        }

        .social-container{
            text-align: center;
        }

        .social-container img{
            width: 25px;
        }
     </style>
</head>


return (
    <body>
    <div class="email-container">
        <div class="email-header">
            <a href="#" class="email-logo"><img src="logo.png" alt="Logo"></a>
            <a href="" class="link-to-website">View in Browser</a>
        </div>
        <div class="hero-content">
            <img src="hero-image.jpg" alt="Hero Image" class="hero-image">
        </div>
        <div class="email-body">
            <p>I have received your message and appreciate you for reaching out to me. I will get back to you as soon as possible</p>
        </div>
        <div class="signature">
            <p>Best regards</p>
            <p>Frans Erhart</p>
        </div>
    </div>

    </body>
);


Export default function Email;