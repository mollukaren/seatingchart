import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function InterestsAccordion() {
  return (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="Evergreen">
        <AccordionTrigger>🌲 &nbsp; Evergreen Interests &nbsp; 🌲</AccordionTrigger>
        <AccordionContent>
        <div className="flex flex-col w-full" >
          <HoverCard>
            <HoverCardTrigger>
              <div className="flex flex-row justify-between py-2">
                <h1>Learning</h1> 
              </div>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="flex flex-col w-full">
                <h1><span className="font-bold">Current Topics: </span></h1>
                <div className="my-2" />
                <h1>•	Front end web standards</h1>
                <div className="my-0.5" />
                <h1>•	Typescript and NextJS</h1>
                <div className="my-0.5" />
                <h1>•	Deadlifting technique</h1>
                <div className="my-0.5" />
                <h1>•	Long Term Memory reinforcement w/ spaced-repitition tools</h1>
              </div>
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger>
              <div className="flex flex-row justify-between py-2">
                <h1>Traveling</h1>
              </div>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="flex flex-col w-full">
                <h1><span className="font-bold">Last Trip: </span></h1>
                <div className="my-2" />
                <h1>Greece & Italy - Feb-Apr &apos;23</h1>
              </div>
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger>
              <div className="flex flex-row justify-between py-2">
                <h1>TV</h1>
              </div>
            </HoverCardTrigger>
            <HoverCardContent>
            <div className="flex flex-col w-full">
              <h1><span className="font-bold">Current Show: </span></h1>
                <div className="my-2" />
                <h1><span className="font-bold">•	Shrinking</span></h1>
                <div className="my-2" />
              <h1><span className="font-bold">Next Show(s): </span></h1>
                <div className="my-2" />
                <h1><span className="font-bold">•	Only Murders in the Building (S3)</span></h1>
                <div className="my-0.5" />
                <h1><span className="font-bold">•	The Crown (S6)</span></h1>
            </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="InSeason">
        <AccordionTrigger> ☀️ &nbsp; In Season Interests &nbsp; 🍁</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col w-full" >
            <HoverCard>
              <HoverCardTrigger>
                <div className="flex flex-row justify-between py-2">
                  <h1>Weight Lifting</h1> 
                </div>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="flex flex-col w-full">
                  <h1><span className="font-bold">Current Lifts: </span></h1>
                  <div className="my-2" />
                  <h1><span className="font-bold">Squat: </span>135</h1>
                  <div className="my-0.5" />
                  <h1><span className="font-bold">Deadlift: </span>155</h1>
                  <div className="my-0.5" />
                  <h1><span className="font-bold">Bench: </span>100</h1>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
          <div className="flex flex-col w-full" >
            <HoverCard>
              <HoverCardTrigger>
                <div className="flex flex-row justify-between py-2">
                  <h1>Reading</h1>
                </div>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="flex flex-col w-full">
                  <h1><span className="font-bold">Last Book: </span></h1>
                  <div className="my-2" />
                  <h1>Slaughter House V</h1>
                  <div className="my-2" />
                  <h1><span className="font-bold">Current Book: </span></h1>
                  <div className="my-2" />
                  <h1>Feeling Good</h1>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
          <div className="flex flex-col w-full" >
            <HoverCard>
              <HoverCardTrigger>
                <div className="flex flex-row justify-between py-2">
                  <h1>Baby and Infant Care</h1>
                </div>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="flex flex-col w-full">
                  <h1><span className="font-bold">Current Nephew Age: </span></h1>
                  <div className="my-2" />
                  <h1>-3 weeks</h1>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="OutOfSeason">
        <AccordionTrigger>🥶 &nbsp; Out Of Season Interests &nbsp; ❄️</AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col w-full" >
            <h1 className="py-2">Running</h1>
            <h1 className="py-2">Cooking</h1>
            
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
