// Mark this as a Client Component
"use client"
import React from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ShinyButton } from "./magicui/shiny-button"
import { toast } from "sonner"

export default function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "2d9906eb-763b-4343-93b2-449c75c41e3d");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="flex flex-col px-12 md:w-2/3 mt-10 py-10 text-white md:px-24" id="contact">
            <div className="md:items-start md:justify-start">
                <p className="text-purple-400 mb-2">Let's talk</p>

                <h1 className="text-6xl font-bold mb-6">Contact</h1>

                <p className="text-gray-300 text-lg mb-8">
                    Have a question or a project in mind? Feel free to reach out.
                </p>

                <div className="mb-8">
                    <p className="text-gray-300">
                        Location: <span className="text-white">Chandrapur, Maharashtra, India</span>
                    </p>
                </div>

                <form onSubmit={onSubmit} className="items-center justify-center md:ml-10 md:pl-20 space-y-6 md:w-4/5">
                    <input type="hidden" name="access_key" value="2d9906eb-763b-4343-93b2-449c75c41e3d" />
                    <div>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Name"
                            className="bg-zinc-900 border-zinc-800 text-white h-12 rounded-md w-full px-3"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Email"
                            className="bg-zinc-900 border-zinc-800 text-white h-12 rounded-md w-full px-3"
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            required
                            placeholder="Message"
                            className="bg-zinc-900 border-zinc-800 text-white min-h-32 rounded-md w-full px-3 py-2"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-md transition-colors duration-200"
                    >
                        Submit
                    </button>
                </form>
                <span className="block mt-4 text-purple-400">{result}</span>
            </div>
        </div>
    );
}
