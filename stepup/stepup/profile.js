//profile.js
import React, { useEffect, useState } from 'react';
import { View, Text, Image, SafeAreaView, TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles/styles_profile';
import { useIsFocused } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';
import { useNavigation, useRoute } from '@react-navigation/native';
import 'react-native-gesture-handler';

export default function Dash() {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const route = useRoute();

  const logoutIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="logout"><path d="M12.59,13l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H3a1,1,0,0,0,0,2ZM12,2A10,10,0,0,0,3,7.55a1,1,0,0,0,1.8.9A8,8,0,1,1,12,20a7.93,7.93,0,0,1-7.16-4.45,1,1,0,0,0-1.8.9A10,10,0,1,0,12,2Z"></path></svg>
`;

  const settingsIcon = `
  <svg data-icon-name="settings-alt" data-style="line" icon_origin_id="20601" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="settings-alt" class="icon line" width="48" height="48"><path style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;" d="M19.29,9.39l1.9,1.9a1,1,0,0,1,0,1.42l-1.9,1.9a1,1,0,0,0-.29.7V18a1,1,0,0,1-1,1H15.31a1,1,0,0,0-.7.29l-1.9,1.9a1,1,0,0,1-1.42,0l-1.9-1.9a1,1,0,0,0-.7-.29H6a1,1,0,0,1-1-1V15.31a1,1,0,0,0-.29-.7l-1.9-1.9a1,1,0,0,1,0-1.42l1.9-1.9A1,1,0,0,0,5,8.69V6A1,1,0,0,1,6,5H8.69a1,1,0,0,0,.7-.29l1.9-1.9a1,1,0,0,1,1.42,0l1.9,1.9a1,1,0,0,0,.7.29H18a1,1,0,0,1,1,1V8.69A1,1,0,0,0,19.29,9.39ZM12,9a3,3,0,1,0,3,3A3,3,0,0,0,12,9Z" id="primary"></path></svg>
`;

const pastIcon = `
<svg data-icon-name="past" data-style="line" icon_origin_id="20354" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="alarm" class="icon line" width="48" height="48"><path style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;" d="M19.5,13.5A7.5,7.5,0,1,1,12,6,7.5,7.5,0,0,1,19.5,13.5ZM9,3h6M12,3V6" id="primary"></path><polyline style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;" points="12 10 12 13 14 15" data-name="primary" id="primary-2"></polyline></svg>
`;

const supportIcon = `
<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 2" viewBox="0 0 35 35" id="support"><path d="M29.07,16.57a1.25,1.25,0,0,1-1.25-1.25V11.79c0-5-4.62-9-10.3-9s-10.3,4.05-10.3,9v3.53a1.25,1.25,0,0,1-2.5,0V11.79C4.72,5.43,10.47.25,17.52.25s12.8,5.18,12.8,11.54v3.53A1.24,1.24,0,0,1,29.07,16.57Z"></path><path d="M25.69 28.33a1.25 1.25 0 0 1-1.25-1.25V15.21A1.25 1.25 0 0 1 25.69 14c4.31 0 7.82 3.23 7.82 7.19S30 28.33 25.69 28.33zm1.25-11.74V25.7A4.86 4.86 0 0 0 31 21.15 4.86 4.86 0 0 0 26.94 16.59zM9.31 28.33c-4.31 0-7.82-3.22-7.82-7.18S5 14 9.31 14a1.25 1.25 0 0 1 1.25 1.25V27.08A1.25 1.25 0 0 1 9.31 28.33zM8.06 16.59A4.86 4.86 0 0 0 4 21.15 4.86 4.86 0 0 0 8.06 25.7z"></path><path d="M25.28,32.4H21.14a1.25,1.25,0,0,1,0-2.5h4.14a2.44,2.44,0,0,0,2.44-2.44v-.55a1.25,1.25,0,1,1,2.5,0v.55A4.94,4.94,0,0,1,25.28,32.4Z"></path><path d="M19,34.75H16.53a3.42,3.42,0,0,1-3.42-3.42v-.14a3.42,3.42,0,0,1,3.42-3.41H19a3.41,3.41,0,0,1,3.41,3.41v.14A3.42,3.42,0,0,1,19,34.75Zm-2.45-4.47a.92.92,0,0,0-.92.91v.14a.92.92,0,0,0,.92.92H19a.92.92,0,0,0,.91-.92v-.14a.91.91,0,0,0-.91-.91Z"></path></svg>
`;

const securityIcon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="lock"><path d="M12,13a1.49,1.49,0,0,0-1,2.61V17a1,1,0,0,0,2,0V15.61A1.49,1.49,0,0,0,12,13Zm5-4V7A5,5,0,0,0,7,7V9a3,3,0,0,0-3,3v7a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V12A3,3,0,0,0,17,9ZM9,7a3,3,0,0,1,6,0V9H9Zm9,12a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V12a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z"></path></svg>
`;

const ModuleIcon = `
<svg id='Module_Three_1_24' width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><rect width='24' height='24' stroke='none' fill='#000000' opacity='0'/>


<g transform="matrix(0.83 0 0 0.83 12 12)" >
<g style="" >
<g transform="matrix(1 0 0 1 0 -4.05)" >
<path style="stroke: rgb(0,0,0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" transform=" translate(-12, -7.95)" d="M 16.966 4.787 C 17.29753670941469 4.985948024213276 17.500277829606492 5.34435180223025 17.5 5.731 L 17.5 10.37 L 12 13.908 L 6.5 10.37 L 6.5 5.731 C 6.499722170393506 5.34435180223025 6.702463290585311 4.985948024213276 7.034 4.787 L 11.434000000000001 2.147 C 11.782377753079885 1.9379458862817096 12.217622246920117 1.93794588628171 12.566 2.1470000000000002 Z" stroke-linecap="round" />
</g>
<g transform="matrix(1 0 0 1 0 -0.84)" >
<path style="stroke: rgb(0,0,0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" transform=" translate(-12, -11.16)" d="M 12 8.408 L 12 13.908" stroke-linecap="round" />
</g>
<g transform="matrix(1 0 0 1 5.5 4.43)" >
<path style="stroke: rgb(0,0,0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" transform=" translate(-17.5, -16.43)" d="M 17.5 17.208 L 12 13.907999999999998 L 17.5 10.369999999999997 L 22.5 13.582999999999998 C 22.81278468539709 13.786555542508658 23.00103231047878 14.134813648909786 23 14.508 L 23 18.57 C 23.00103231047878 18.943186351090212 22.81278468539709 19.29144445749134 22.5 19.495 L 18.1 22.325000000000003 C 17.737572914665762 22.55808110687224 17.272427085334236 22.55808110687224 16.91 22.325000000000003 L 12 19.17 L 12 13.908" stroke-linecap="round" />
</g>
<g transform="matrix(1 0 0 1 5.5 7.85)" >
<path style="stroke: rgb(0,0,0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" transform=" translate(-17.5, -19.85)" d="M 17.5 17.208 L 17.5 22.5" stroke-linecap="round" />
</g>
<g transform="matrix(1 0 0 1 -5.5 4.43)" >
<path style="stroke: rgb(0,0,0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" transform=" translate(-6.5, -16.43)" d="M 12 13.908 L 12 19.17 L 7.1 22.325 C 6.737572914665762 22.558081106872237 6.272427085334238 22.558081106872237 5.91 22.325 L 1.5099999999999998 19.494999999999997 C 1.1933975384346625 19.29379792119476 1.0011557332040106 18.945124058766616 1 18.57 L 1 14.508 C 0.9989676895212181 14.134813648909786 1.1872153146029079 13.786555542508658 1.4999999999999996 13.582999999999998 L 6.5 10.369999999999997 L 12 13.908 L 6.5 17.208" stroke-linecap="round" />
</g>
<g transform="matrix(1 0 0 1 -8.18 3.6)" >
<path style="stroke: rgb(0,0,0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" transform=" translate(-3.82, -15.6)" d="M 6.5 17.208 L 1.131 13.987" stroke-linecap="round" />
</g>
<g transform="matrix(1 0 0 1 -5.5 7.85)" >
<path style="stroke: rgb(0,0,0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" transform=" translate(-6.5, -19.85)" d="M 6.5 17.208 L 6.5 22.5" stroke-linecap="round" />
</g>
<g transform="matrix(1 0 0 1 -2.68 -5.2)" >
<path style="stroke: rgb(0,0,0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" transform=" translate(-9.32, -6.8)" d="M 12 8.408 L 6.641 5.192" stroke-linecap="round" />
</g>
<g transform="matrix(1 0 0 1 2.68 -5.2)" >
<path style="stroke: rgb(0,0,0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" transform=" translate(-14.68, -6.8)" d="M 17.359 5.192 L 12 8.408" stroke-linecap="round" />
</g>
<g transform="matrix(1 0 0 1 8.18 3.6)" >
<path style="stroke: rgb(0,0,0); stroke-width: 1; stroke-dasharray: none; stroke-linecap: round; stroke-dashoffset: 0; stroke-linejoin: round; stroke-miterlimit: 4; fill: none; fill-rule: nonzero; opacity: 1;" transform=" translate(-20.18, -15.6)" d="M 22.869 13.987 L 17.5 17.208" stroke-linecap="round" />
</g>
</g>
</g>
</svg>
`;

const ppIcon = `
<svg id='Privacy_Policy_24' width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><rect width='24' height='24' stroke='none' fill='#000000' opacity='0'/>


<g transform="matrix(0.69 0 0 0.69 12 12)" >
<path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" translate(-19, -17.54)" d="M 6 3 L 6 29 L 19.119141 29 C 18.739141 28.39 18.44 27.73 18.25 27 L 8 27 L 8 5 L 18 5 L 18 11 L 24 11 L 24 17.439453 C 24.54 17.189453 25.2 17 26 17 L 26 9.5898438 L 19.410156 3 L 6 3 z M 20 6.4101562 L 22.589844 9 L 20 9 L 20 6.4101562 z M 11 13 L 11 15 L 21 15 L 21 13 L 11 13 z M 11 17 L 11 19 L 21 19 L 21 17 L 11 17 z M 26 18.634766 L 25.318359 19.267578 C 25.318359 19.267578 24.307255 20.152848 23.603516 20.457031 C 22.833408 20.79049 22.322256 20.990827 20.992188 21 L 20 21.007812 L 20 25.191406 C 20 27.430826 21.495374 29.100321 22.851562 30.197266 C 23.529657 30.745738 24.196865 31.164985 24.703125 31.453125 C 24.956255 31.597195 25.169478 31.707861 25.324219 31.785156 C 25.401589 31.823806 25.463242 31.85315 25.509766 31.875 C 25.533026 31.88593 25.552369 31.895104 25.568359 31.902344 C 25.584349 31.909544 25.520781 31.888527 25.644531 31.935547 L 26 32.070312 L 26.355469 31.935547 C 26.479216 31.888527 26.415651 31.909584 26.431641 31.902344 C 26.447631 31.895144 26.466974 31.88592 26.490234 31.875 C 26.536754 31.85315 26.598413 31.823796 26.675781 31.785156 C 26.830518 31.707866 27.043749 31.597184 27.296875 31.453125 C 27.803127 31.165006 28.470351 30.745664 29.148438 30.197266 C 30.504616 29.100458 32 27.43241 32 25.193359 L 32 21.007812 L 31.007812 21 C 29.678203 20.9908 29.167774 20.790045 28.396484 20.457031 C 27.692745 20.152848 26.681641 19.267578 26.681641 19.267578 L 26 18.634766 z M 11 21 L 11 23 L 18 23 L 18 21 L 11 21 z M 26 21.197266 C 26.383093 21.531244 26.730241 21.915506 27.603516 22.292969 C 28.198069 22.549674 29.107035 22.66958 30 22.792969 L 30 25.193359 C 30 26.502309 29.021952 27.727625 27.890625 28.642578 C 27.324962 29.100055 26.744529 29.466744 26.308594 29.714844 C 26.180426 29.787784 26.099091 29.828746 26 29.880859 C 25.90091 29.828749 25.819571 29.787789 25.691406 29.714844 C 25.255479 29.466734 24.675031 29.100106 24.109375 28.642578 C 22.978063 27.727523 22 26.500987 22 25.191406 L 22 22.792969 C 22.892943 22.66982 23.801095 22.550774 24.396484 22.292969 C 25.269759 21.915506 25.616907 21.531244 26 21.197266 z" stroke-linecap="round" />
</g>
</svg>
`;

const EditIcon = `
<svg id='Edit_24' width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'><rect width='24' height='24' stroke='none' fill='#000000' opacity='0'/>


<g transform="matrix(0.53 0 0 0.53 12 12)" >
<path style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-dashoffset: 0; stroke-linejoin: miter; stroke-miterlimit: 4; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" translate(-24, -24)" d="M 36 5.0097656 C 34.205301 5.0097656 32.410791 5.6901377 31.050781 7.0507812 L 8.9160156 29.183594 C 8.4960384 29.603571 8.1884588 30.12585 8.0253906 30.699219 L 5.0585938 41.087891 C 4.909599585679415 41.61136473005194 5.055818649159609 42.174475161087585 5.440671944485212 42.559328331832646 C 5.8255252398108155 42.944181502577706 6.388635718178886 43.090400383773854 6.9121094 42.941406 L 17.302734 39.974609 C 17.30338593263404 39.97395859988369 17.304037266243494 39.97330759960771 17.304688 39.972656 C 17.874212 39.808939 18.39521 39.50518 18.816406 39.083984 L 40.949219 16.949219 C 43.670344 14.228094 43.670344 9.7719064 40.949219 7.0507812 C 39.589209 5.6901377 37.794699 5.0097656 36 5.0097656 z M 36 7.9921875 C 37.020801 7.9921875 38.040182 8.3855186 38.826172 9.171875 C 38.82682299993104 9.171875423758669 38.82747400006896 9.171875423758669 38.828125 9.171875 C 40.403 10.74675 40.403 13.25325 38.828125 14.828125 L 36.888672 16.767578 L 31.232422 11.111328 L 33.171875 9.171875 C 33.957865 8.3855186 34.979199 7.9921875 36 7.9921875 z M 29.111328 13.232422 L 34.767578 18.888672 L 16.693359 36.962891 C 16.634729 37.021121 16.560472 37.065723 16.476562 37.089844 L 8.6835938 39.316406 L 10.910156 31.521484 C 10.91015642375867 31.52083300006896 10.91015642375867 31.52018199993104 10.910156 31.519531 C 10.933086 31.438901 10.975086 31.366709 11.037109 31.304688 L 29.111328 13.232422 z" stroke-linecap="round" />
</g>
</svg>
`;

const [isFontsLoaded] = useFonts({
  // Add your font imports here
});

const [currentBalance, setCurrentBalance] = useState(0); // Set initial balance to 0

useEffect(() => {
  if (route.params?.updatedBalance !== undefined) {
    setCurrentBalance(route.params.updatedBalance);
  }
}, [route.params?.updatedBalance]);

const handleButtonPress = () => {
  navigation.navigate('Start', { hideHeader: true });
  console.log('Button pressed!');
};

if (!isFontsLoaded) {
  return null;
}

return (
  <ScrollView style={[styles.scrollContainer, { backgroundColor: '#FFFFFF' }]}>
    <View style={[styles.Imgcontainer, { marginVertical: isFocused ? 20 : 0 }]}>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome Aditya!</Text>
        <Text style={styles.text1}>Hope You are having a good day!</Text>
        <View style={styles.balancecard}>
          <Text style={styles.balancetext}>Account Balance</Text>
          <Text style={styles.balance}>${currentBalance.toFixed(2)}</Text>
        </View>
          <Text style={styles.space}></Text>
          <Text style={styles.text}>Recent Stats!</Text>
          <View style={styles.cardscontainer}>
            <LinearGradient
              colors={['#677', 'black']}
              style={styles.credits_card}
            >
              <Text style={styles.credits}>Credits     Available</Text>
              <Text style={styles.creditsval}>321</Text>
            </LinearGradient>
            <LinearGradient
              colors={['#677', 'black']}
              style={styles.modules_card}
            >
              <Text style={styles.modules}>Modules Completed</Text>
              <Text style={styles.modulesval}>5</Text>
            </LinearGradient>
          </View>
          <View style={styles.redirectorsContainer}>
          <TouchableHighlight
              underlayColor="#d3d3d3"
              onPress={() => handleRedirect('EditProfile')}
              style={styles.redirector}
            >
              <>
              <SvgXml xml={EditIcon} width="20" height="20" fill="#000000" style={{ marginLeft: 10 }} />
                <Text style={styles.redirectorText}>Edit Profile</Text>
              </>
            </TouchableHighlight>
          <TouchableHighlight
              underlayColor="#d3d3d3"
              onPress={() => handleRedirect('Module')}
              style={styles.redirector}
            >
              <>
              <SvgXml xml={ModuleIcon} width="24" height="24" fill="#000000" style={{ marginLeft: 10 }} />
                <Text style={styles.redirectorText}>My Modules</Text>
              </>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="#d3d3d3"
              onPress={() => handleRedirect('History')}
              style={styles.redirector}
            >
              <>
              <SvgXml xml={pastIcon} width="24" height="24" fill="#000000" style={{ marginLeft: 10 }} />
                <Text style={styles.redirectorText}>Payment History</Text>
              </>
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor="#d3d3d3"
              onPress={() => handleRedirect('Settings')}
              style={styles.redirector}
            >
              <>
              <SvgXml xml={settingsIcon} width="24" height="24" fill="#000000" style={{ marginLeft: 10 }} />
                <Text style={styles.redirectorText}>Settings</Text>
              </>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="#d3d3d3"
              onPress={() => handleRedirect('Support')}
              style={styles.redirector}
            >
              <>
              <SvgXml xml={supportIcon} width="24" height="20" fill="#000000" style={{ marginLeft: 10 }} />
                <Text style={styles.redirectorText}>Support</Text>
              </>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="#d3d3d3"
              onPress={() => handleRedirect('Security')}
              style={styles.redirector}
            >
              <>
              <SvgXml xml={securityIcon} width="24" height="24" fill="#000000" style={{ marginLeft: 10 }} />
                <Text style={styles.redirectorText}>Security</Text>
              </>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="#d3d3d3"
              onPress={() => handleRedirect('PrivacyPolicy')}
              style={styles.redirector}
            >
              <>
              <SvgXml xml={ppIcon} width="24" height="24" fill="#000000" style={{ marginLeft: 10 }} />
                <Text style={styles.redirectorText}>Privacy Policy</Text>
              </>
            </TouchableHighlight>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
  <View style={styles.buttonContent}>
    <SvgXml xml={logoutIcon} width="24" height="24" fill="white" style={{ marginRight: 8 }} />
    <Text style={styles.buttonText}>Logout</Text>
  </View>
</TouchableOpacity>
    </ScrollView>
  );
}
