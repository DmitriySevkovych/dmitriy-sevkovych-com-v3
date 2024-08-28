import { CVSkillItem } from '@/model/cv'
import Image from 'next/image'
import React from 'react'

import { Button } from '../ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card'

type SkillProps = CVSkillItem

const Skill: React.FC<SkillProps> = ({ caption, blocks }) => {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <Button
                    variant={'secondary'}
                    className="text-wrap transition-colors hover:bg-accent"
                >
                    {caption}
                </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                    TODO: implement
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}

export default Skill
