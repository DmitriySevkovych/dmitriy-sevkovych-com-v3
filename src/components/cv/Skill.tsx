import { CVSkillItem } from '@/model/cv'
import Image from 'next/image'
import React from 'react'

import { Button } from '../ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'

type SkillProps = CVSkillItem

const Skill: React.FC<SkillProps> = ({ caption, blocks }) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={'ghost'}
                    className="text-wrap transition-colors hover:bg-accent/70"
                >
                    {caption}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="flex justify-between space-x-4">
                    TODO: implement
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default Skill
