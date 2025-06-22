import Navbar from "@/Components/NavBar"; 
import { Section } from "lucide-react";




export default function Contact() {
  return (
      <div>
        <Navbar />

        <Section id="contactus">
          <div className="contactus-left">
            <div className="contactus-left-top">
              <p><span>-</span> Contact Me</p>
              <p>Let's<span>Connect</span> & <br/> <span>Collaborate</span></p>
            </div>

            <p className="contactus-left-mid">
              Test text
            </p>

            <div className="contactus-left-bottom">
              <div>
                <span><i className="fa-solid fa-envelope"></i></span>
                <p>
                  franserhart12@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="contactus-right">
            <div className="form">
              <input type="text" name="" id="" placeholder="Full Name *"/>
              <input type="text" name="" id="" placeholder="Email *"/>
              <input type="text" name="" id="" placeholder="Phone Number *"/>
              <input type="text" name="" id="" placeholder="Subject"/>
              <textarea name="" id="" cols={30} rows={10} placeholder="Message *"></textarea>
            </div>

            <a href="" className="about-right-btn" >
                <span><i className="fa-solid fa-arrow-right"></i></span>
                <p>Send Message</p>
            </a>
          </div>

        </Section>




        <main className="flex-grow flex flex-col max-w-2xl mx-auto pt-20 pb-32 px-8">
          <div className="select-content p-8 rounded-2xl shadow-lg w-full">
            <h1 className="text-5xl font-semibold mb-6">
              Contact
            </h1>
            <p className="text-xl text-neutral-400 mb-12">
              Send me a message, and I&apos;ll get back to you soon.
            </p>
            <div className="flex justify-center space-x-6 mt-8">

            <div className="email-container">
        <div className="email-header">

        </div>
        <div className="hero-content">

        </div>
        <div className="email-body">
            <p>I have received your message and appreciate you for reaching out to me. I will get back to you as soon as possible</p>
        </div>
        <div className="signature">
            <p>Best regards</p>
            <p>Frans Erhart</p>
        </div>
        </div>


          </div>
        </div>
      </main>
    </div>
 );
}