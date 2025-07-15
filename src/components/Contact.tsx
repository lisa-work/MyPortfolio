import { useState } from 'react';
import { Send, Mail, MessageCircle, User } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import toast from 'react-hot-toast';

export function Contact() {

  const [result, setResult] = useState("");

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  interface Web3FormsResponse {
    success: boolean;
    message: string;
    [key: string]: any;
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "4bdf9e92-025e-4452-ad19-2347f493e422");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data: Web3FormsResponse = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      (event.target as HTMLFormElement).reset();
      toast.success("Form submitted successfully!");
      window.location.reload();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Say <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Hello!</span>
            </h2>
            <p className="text-md md:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects, or simply a new friend. Let's start a conversation!
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="bg-slate-800/30 backdrop-blur-md rounded-2xl border border-slate-700/50 p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="flex items-center gap-2 text-sm md:text-md lg:text-lg text-slate-300">
                    <User size={16} />
                    How I can call you
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="flex items-center gap-2 text-sm md:text-md lg:text-lg font-medium text-slate-300">
                    <Mail size={16} />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="flex items-center gap-2 text-sm md:text-md lg:text-lg font-medium text-slate-300">
                  <MessageCircle size={16} />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hi!"
                />
              </div>
              
              <button
                type="submit"
                className="text-sm md:text-md lg:text-lg w-full md:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </ScrollReveal>
        
        <ScrollReveal delay={0.4}>
          <div className="text-center mt-12">
            <p className="text-slate-400">
              Or reach out directly at{' '}
              <a href="mailto:ngocanhthu.work@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                ngocanhthu.work@gmail.com
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}