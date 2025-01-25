/* eslint-disable jsx-a11y/alt-text */
import { Image, Text, View } from '@react-pdf/renderer'
import React from 'react'

import { tw } from './reactPdfTailwind.config'

const Header = () => {
    return (
        <View style={tw('flex-row justify-evenly items-center gap-5')}>
            {/* Avatar */}
            <View style={tw('flex-row items-center gap-5')}>
                <Image
                    style={tw('h-28 w-28 rounded-full')}
                    src="/images/sevkovych_portrait_375.png"
                />
                <View>
                    <Text style={tw('text-xl leading-snug')}>
                        Dmitriy Sevkovych
                    </Text>
                    <Text style={tw('text-lg leading-snug')}>
                        M.Sc. Mathematics
                    </Text>
                    <Text style={tw('mt-1 text-base font-light leading-tight')}>
                        Freelance IT Specialist
                    </Text>
                    <Text style={tw('mt-1 text-base font-light leading-tight')}>
                        Web + AI/ML
                    </Text>
                </View>
            </View>

            {/* Intro text */}
            <View
                style={tw('max-w-[45%] gap-2 text-sm leading-snug font-light')}
            >
                <Text>
                    You need help with a little bit of everything in your
                    software project? Lucky you!
                </Text>
                <Text>
                    I am a freelance one-man IT department with hands-on
                    professional experience in architecting, developing,
                    deploying and monitoring web applications and machine
                    learning projects.
                </Text>

                <Text>
                    Give me a call, ping me on LinkedIn or send me an e-mail!
                </Text>

                <View style={tw('flex-row justify-evenly')}>
                    <Text style={tw('text-accent')}>+49 177 837 11 63</Text>
                    <Text style={tw('text-muted')}>{'//'}</Text>
                    <Text style={tw('text-accent')}>dmitriy@sevkovych.com</Text>
                </View>
            </View>
        </View>
    )
}

export default Header
