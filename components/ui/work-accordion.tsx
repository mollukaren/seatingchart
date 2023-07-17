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

export function WorkAccordion() {
  return (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="Software Eng">
        <AccordionTrigger>👨🏾‍💻 &nbsp; Software Engineering &nbsp; 〈〉</AccordionTrigger>
        <AccordionContent>
        <div className="flex flex-col w-full" >
          <HoverCard>
            <HoverCardTrigger>
              <div className="flex flex-row justify-between py-2">
                <h1>Fullstack Engineer</h1> 
                <h1 className="font-bold">Salesloft</h1>
              </div>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="flex flex-col w-full">
                <h1>From <span className="font-bold">May &apos;22- Feb &apos;23</span>, I built features for Salesloft&apos;s core product.</h1>
                <div className="my-2" />
                <h1 className="font-bold">Here are some highlights:</h1>
                <div className="my-2" />
                <h1><span className="font-bold">•</span>	Fixed <span className="font-bold">81 of 682</span> outstanding company-wide Rails upgrade test failures </h1>
                <div className="my-0.5" />
                <h1><span className="font-bold">•</span>	Built and ran feature deprecation backfill script to destroy <span className="font-bold">&gt;1000 customer objects</span> </h1>
                <div className="my-0.5" />
                <h1><span className="font-bold">•</span>	Appointed sole owner for my team&apos;s internationalization efforts</h1>
              </div>
            </HoverCardContent>
          </HoverCard>
          <HoverCard>
            <HoverCardTrigger>
              <div className="flex flex-row justify-between">
                <h1>Developer Experience Engineer</h1> 
                <h1 className="font-bold">Lob</h1>
              </div>
            </HoverCardTrigger>
            <HoverCardContent>
            <div className="flex flex-col w-full">
                <h1>During this short stint from <span className="font-bold">August &apos;21- Dec &apos;21</span>, I worked on Lob&apos;s Dev Rel team improving our SDK&apos;s.</h1>
                <div className="my-2" />
                <h1 className="font-bold">During my time there, I:</h1>
                <div className="my-2" />
                <h1><span className="font-bold">•</span>	Affected <span className="font-bold"> over 150 users and 100K reqs/month </span> by refactoring Lob&apos;s OpenAPI spec  </h1>
            </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="Product">
        <AccordionTrigger> 📲 &nbsp; Product Management &nbsp; 👨🏾‍🚒</AccordionTrigger>
        <AccordionContent>
        <div className="flex flex-col w-full" >
          <HoverCard>
            <HoverCardTrigger>
              <div className="flex flex-row justify-between py-2">
                <h1>Product Manager</h1> 
                <h1 className="font-bold">Lob</h1>
              </div>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="flex flex-col w-full">
                <h1>From <span className="font-bold">May &apos;21- August &apos;22</span>, I managed the esoteric preflight process that makes Lob&apos;s mail print-ready. It was a complicated job - see resume for more info</h1>
                <div className="my-2" />
                <h1 className="font-bold">Here are some highlights:</h1>
                <div className="my-2" />
                <h1><span className="font-bold">•</span> Owned all product decisions for Lob&apos;s rendering pipeline <span className="font-bold">(200MM files/year)</span> w/ a team of four engineers </h1>
                <div className="my-0.5" />
                <h1><span className="font-bold">•</span>	Quarterbacked, triaged, and rectified large-scale rendering-related print problems affecting over <span className="font-bold">50,000</span> mail pieces worth over <span className="font-bold">$30,000</span> </h1>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="Recruiting">
        <AccordionTrigger>📇 &nbsp; Technical Recruiting &nbsp; 🧑‍💼</AccordionTrigger>
        <AccordionContent>
        <div className="flex flex-col w-full" >
          <HoverCard>
            <HoverCardTrigger>
              <div className="flex flex-row justify-between py-2">
                <h1>Lead Technical Recruiter</h1> 
                <h1 className="font-bold">Datavant</h1>
              </div>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="flex flex-col w-full">
                <h1>From <span className="font-bold">Oct &apos;18- July &apos;19</span>, I was responsible for Datavant&apos;s technical hiring from sourcing and coordination to candidate screening and on-site management</h1>
                <div className="my-2" />
                <h1 className="font-bold">Here are some highlights:</h1>
                <div className="my-2" />
                <h1><span className="font-bold">•</span> Doubled engineering team size </h1>
                <div className="my-0.5" />
                <h1><span className="font-bold">•</span>	Built Datavant&apos;s first internship program, with 4 interns hired from <span className="font-bold">&gt;400</span> applicants </h1>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="Entrepreneurship">
        <AccordionTrigger>💸 &nbsp; Entrepreneurship &nbsp; 📉</AccordionTrigger>
        <AccordionContent>
        <div className="flex flex-col w-full" >
          <HoverCard>
            <HoverCardTrigger>
              <div className="flex flex-row justify-between py-2">
                <h1>Co-Founder</h1> 
                <h1 className="font-bold">FlexSpark</h1>
              </div>
            </HoverCardTrigger>
            <HoverCardContent>
              <div className="flex flex-col w-full">
                <h1>From <span className="font-bold">Jan &apos;16- June &apos;18</span>, I worked with 3 cofounder on designing and bringing a medical device to market. While we failed to overcome key product-market issues, I learned a lot about myself and the med device world.</h1>
                <div className="my-2" />
                <h1 className="font-bold">Here are some highlights:</h1>
                <div className="my-2" />
                <h1><span className="font-bold">•</span> Raised $100,000 in seed funding from InnovaFund and MB Venture Partners  </h1>
                <div className="my-0.5" />
                <h1><span className="font-bold">•</span> Iterated designs and built prototypes while managing engineering and funding timelines </h1>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
