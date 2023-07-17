import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function SkillsAccordion() {
  return (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="FrontEnd">
        <AccordionTrigger>💅 &nbsp; Front End &nbsp; 🖼</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col w-full">
            <h1 className="font-bold">React</h1>
            <div className="my-2" />
            <h1 className="font-bold">Tailwind</h1>
            <div className="my-2" />
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="BackEnd">
        <AccordionTrigger>👨🏾‍💻 &nbsp; Back End &nbsp; 🤓</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col w-full">
            <h1 className="font-bold">Ruby on Rails</h1>
            <div className="my-2" />
            <h1 className="font-bold">Python</h1>
            <div className="my-2" />
            <h1 className="font-bold">NextJS</h1>
            <div className="my-2" />
            <h1 className="font-bold">TypeScript</h1>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="Product">
        <AccordionTrigger> 📈 &nbsp; Product Management &nbsp; 📊</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col w-full">
            <h1 className="font-bold">Sprint Planning</h1>
            <div className="my-2" />
            <h1 className="font-bold">Customer Remediation 💀</h1>
            <div className="my-2" />
            <h1 className="font-bold">Vendor Analysis</h1>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
