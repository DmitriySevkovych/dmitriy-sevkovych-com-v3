import { CVEducationItem } from '@/model/cv'
import { ChevronRightCircle } from 'lucide-react'
import React from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '../ui/card'

type EducationProps = CVEducationItem

const Education: React.FC<EducationProps> = ({
    title,
    date_from,
    date_until,
    location,
    focus,
    minor,
}) => {
    return (
        <Card className="flex flex-col bg-secondary/40">
            <CardHeader>
                <CardDescription>{`${date_from} - ${date_until}`}</CardDescription>
                <CardTitle className="flex flex-col">
                    <div className="text-xl">{title}</div>
                    <div className="text-lg">{`@ ${location}`}</div>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <h6 className="font-medium">Focus:</h6>
                <div className="pl-2">
                    {focus.map((item, i) => (
                        <p className="flex items-baseline gap-1" key={i}>
                            <ChevronRightCircle strokeWidth={1} size={12} />
                            {item}
                        </p>
                    ))}
                </div>

                <div className="mt-3 flex gap-1">
                    <h6 className="font-medium">Minor:</h6>
                    <p>{minor}</p>
                </div>
            </CardContent>
        </Card>
    )
}

export default Education
