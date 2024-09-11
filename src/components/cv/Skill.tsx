import { CVSkillItem } from '@/model/cv'
import Image from 'next/image'
import React from 'react'

import { Button } from '../ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'

type SkillProps = CVSkillItem

const Skill: React.FC<SkillProps> = ({ caption, subskills }) => {
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
                <div className="flex flex-col gap-3">
                    {subskills.map((skill, i) => (
                        <div key={i}>
                            <h5 className="text-lg font-light">
                                {skill.caption}
                            </h5>
                            <p>{skill.tools.join(', ')}</p>
                        </div>
                    ))}
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default Skill
