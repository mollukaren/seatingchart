import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { WorkAccordion } from '@/components/ui/work-accordion'
import { SkillsAccordion } from '@/components/ui/skills-accordion'
import { InterestsAccordion } from '@/components/ui/interests-accordion'
import ImageToggle from '@/components/ui/author-image-toggle'
import { Button } from '@/components/ui/button'

const authorPage = () => {
  return (
    <div className='flex flex-col max-w-full mx-auto min-h-96 space-y-16 justify-items-center align-center'>
      <div className="mx-auto flex flex-col items-center space-y-4 text-center">
        <ImageToggle/>
        <div className="leading-normal sm:text-lg sm:leading-7">
          <span className="font-bold text-3xl">Well Rounded Generalist </span> <span className="text-3xl">&gt;</span> <span className="font-bold text-3xl">Technical Specialist</span>
        </div>
        <div className="py-6">
          <p className="leading-normal sm:text-lg sm:leading-7">
            My career spans from <span className="font-bold">entrepreneurship</span> to <span className="font-bold">recruiting</span> to <span className="font-bold">product management</span> to <span className="font-bold">software engineering</span>
          </p>
          <p className="leading-normal my-2 sm:text-lg sm:leading-7">
          In the last five years, I&apos;ve grown from a well-rounded generalist into a focused specialist.

          </p>
          <p className="leading-normal my-2 sm:text-lg sm:leading-7">
          My next career goal is becoming a senior engineer and owning bigger impact in the organizations I call home.
          </p>
        </div>
        {/* <Button className='font-bold text-2xl py-6' href='resumelol'>Find My Resume Here</Button> */}
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <Card className="relative overflow-hidden rounded-lg border bg-background p-2">
            <CardHeader>
              <CardTitle>Work Experience</CardTitle>
              <CardDescription>Hover any job to read more</CardDescription>
            </CardHeader>
            <CardContent>
              <WorkAccordion/>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden rounded-lg border bg-background p-2">
            <CardHeader>
              <CardTitle>Skills</CardTitle>
              <CardDescription>To pay the 💸</CardDescription>
            </CardHeader>
            <CardContent>
              <SkillsAccordion/>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden rounded-lg border bg-background p-2">
            <CardHeader>
              <CardTitle>Interests</CardTitle>
              <CardDescription>Hover for more info</CardDescription>
            </CardHeader>
            <CardContent>
              <InterestsAccordion/>
            </CardContent>
          </Card>
        </div>
    </div>
  )
}

export default authorPage