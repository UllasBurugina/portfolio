"use client"
import {
  CodeBlock,
  CodeBlockGroup,
} from "@/components/ui/code-block"
import { Button } from "@/components/ui/button"
import { Check, Copy } from "lucide-react"
import { useState} from "react"
import resumePdf from '@/assets/Ullas_Burugina.pdf';

export default function InteractivePortfolioCodeBlock() {
  const [copied, setCopied] = useState(false)

  // Custom component for interactive code display
  const InteractiveCodeDisplay = () => {
    return (
      <div className="w-full overflow-x-auto text-[13px]">
        <pre className="px-4 py-4 font-mono text-slate-50 bg-gray-900">
          <code>
            <span className="text-blue-400">const</span> <span className="text-green-400">Ullas</span> <span className="text-slate-50">=</span> <span className="text-slate-50">{'{'}</span>
            <br />
            <span className="text-slate-50">  </span><span className="text-cyan-300">currentLocation</span><span className="text-slate-50">:</span> <span className="text-yellow-300">"</span><a href="https://goo.gl/maps/YZ3ZHH49Lf8TNbX59" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:underline hover:text-yellow-100">India, Bangalore</a><span className="text-yellow-300">",</span>
            <br />
            <span className="text-slate-50">  </span><span className="text-cyan-300">contactInfo</span><span className="text-slate-50">:</span> <span className="text-slate-50">[</span>
            <br />
            <span className="text-slate-50">    </span><span className="text-yellow-300">"</span><a href="mailto:buruginaullas@gmail.com" className="text-yellow-300 hover:underline hover:text-yellow-100">buruginaullas@gmail.com</a><span className="text-yellow-300">",</span> 
            <br />
            <span className="text-slate-50">    </span><span className="text-yellow-300">"</span><a href="https://www.linkedin.com/in/ullas-burugina-b03b7a259/" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:underline hover:text-yellow-100">LinkedIn</a><span className="text-yellow-300">",</span> 
            <br />
            <span className="text-slate-50">    </span><span className="text-yellow-300">"</span><a href="https://github.com/UllasBurugina" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:underline hover:text-yellow-100">github</a><span className="text-yellow-300">"</span>
            <br />
            <span className="text-slate-50">  ],</span>
            <br />
            <span className="text-slate-50">  </span><span className="text-cyan-300">resume</span><span className="text-slate-50">:</span> <span className="text-yellow-300">"</span><a href={resumePdf} target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:underline hover:text-yellow-100">Ullas.pdf</a><span className="text-yellow-300">",</span>
            <br />
            <span className="text-slate-50">  </span><span className="text-cyan-300">education</span><span className="text-slate-50">:</span> <span className="text-yellow-300">"</span><a href="https://www.bmsit.in/" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:underline hover:text-yellow-100">B.E Computer Science Specializaiton in AI/ML, BMSIT</a><span className="text-yellow-300">",</span>
            <br />
            <span className="text-slate-50">  </span><span className="text-cyan-300">skills</span><span className="text-slate-50">:</span> <span className="text-slate-50">[</span>
            <br />
            <span className="text-slate-50">    </span><span className="text-yellow-300">"</span><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:underline hover:text-yellow-100">JavaScript</a><span className="text-yellow-300">",</span> 
            <br />
            <span className="text-slate-50">    </span><span className="text-yellow-300">"</span><a href="https://www.python.org/" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:underline hover:text-yellow-100">Python</a><span className="text-yellow-300">",</span> 
            <br />
            <span className="text-slate-50">    </span><span className="text-yellow-300">"</span><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:underline hover:text-yellow-100">React</a><span className="text-yellow-300">",</span> 
            <br />
            <span className="text-slate-50">    </span><span className="text-yellow-300">"</span><a href="https://flask.palletsprojects.com/" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:underline hover:text-yellow-100">Flask</a><span className="text-yellow-300">",</span> 
            <br />
            <span className="text-slate-50">    </span><span className="text-yellow-300">"</span><a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:underline hover:text-yellow-100">webpack</a><span className="text-yellow-300">",</span> 
            <br />
            <span className="text-slate-50">    </span><span className="text-yellow-300">"</span><a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:underline hover:text-yellow-100">git</a><span className="text-yellow-300">"</span>
            <br />
            <span className="text-slate-50">  ]</span>
            <br />
            <span className="text-slate-50">...</span>
          </code>
        </pre>
      </div>
    );
  };

  const fullCode = `const Ullas = {
  currentLocation: "India, Bangalore",
  contactInfo: [
    "buruginaullas@gmail.com", 
    "LinkedIn", 
    "github"
  ],
  resume: "Ullaspdf",
  education: "B.E computer science specializaiton in AIML, BMSIT",
  skills: [
    "JavaScript", 
    "Python", 
    "React", 
    "Flask", 
    "webpack", 
    "git"
  ]
};`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="w-full max-w-3xl">
      <CodeBlock>
        <CodeBlockGroup className="border-border border-b px-4 py-2">
          <div className="flex items-center gap-2">
            <div className="bg-primary/10 text-primary rounded px-2 py-1 text-xs font-medium">
              JavaScript
            </div>
            <span className="text-muted-foreground text-sm">
              Portfolio.js
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={handleCopy}
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </CodeBlockGroup>
        <InteractiveCodeDisplay />
      </CodeBlock>
    </div>
  )
}