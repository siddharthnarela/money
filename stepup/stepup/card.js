import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles/styles_mf';

import 'react-native-gesture-handler';

export default function Mfcard({name,nav,ytd,annual,risk}){
    return(
        <LinearGradient
        colors={['#383838', '#34495E']}
        style={styles.stockcard}
      >
        <Text style={styles.stockname}>{name}</Text>
        <Text style={styles.price}>{nav}</Text>
        <Text style={styles.text}>{ytd}</Text>
        <Text style={styles.text}>{annual}	</Text>
        <Text style={styles.risk}>{risk}</Text>
      </LinearGradient>
    )
}


