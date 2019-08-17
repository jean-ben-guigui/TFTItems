import React from 'react'
import { Image } from 'react-native';

export default function BF() {
    return (
        <Image
            style={{ width: 50, height: 50 }}
            resizeMode={"contain"}
            source={{ uri: 'https://vignette.wikia.nocookie.net/leagueoflegends/images/a/ab/B._F._Sword_item.png/revision/latest?cb=20171221055309' }}
        />
    )
}