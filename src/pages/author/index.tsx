import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import CustomizedTimeline from "@/components/ui/mui-timeline"
import { WorkAccordion } from '@/components/ui/work-accordion'
import { SkillsAccordion } from '@/components/ui/skills-accordion'
import { InterestsAccordion } from '@/components/ui/interests-accordion'

const authorPage = () => {
  return (
    <div className='flex flex-col mx-auto min-h-96 space-y-48 justify-items-center align-center'>
      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Hey! I&apos;m Michael (replace with himynameis svg)
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            I love to learn and build things! Right now, I&apos;m learning about how to make end-to-end fullstack apps. 
          </p>
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
        <div className="mx-auto text-center md:max-w-[58rem]">
          <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Taxonomy also includes a blog and a full-featured documentation site
            built using Contentlayer and MDX.
          </p>
        </div>
      </section>
      <CustomizedTimeline />
    </div>
  )
}

export default authorPage