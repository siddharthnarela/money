// import { StatusBar } from 'expo-status-bar';
// import { LinearGradient } from 'expo-linear-gradient';
// import  {React, useState } from 'react';
// import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';


// import { 
//   StyleSheet, 
//   Text, 
//   View,
//   Button,
//   Switch,
//   TextInput,
//   ImageBackground,
//   Image,
//   TouchableOpacity,
//   TouchableNativeFeedback,
//   SafeAreaView} from 'react-native';
// //   import {React} from 'react';
  
// export default function ModuleCard() {


//     const [progress, setProgress] = useState(0);

//   const handleProgressChange = (newProgress) => {
//     setProgress(newProgress);
//   };

//   const buttonTextStyle = {
//     color: '#393939',
//     fontWeight: '700',
//     fontSize: 16,
    
// };

//   return (
//     // <View style={styles.container}>
//       <View style={{flex: 1}}>
//         <ProgressSteps nextBtnStyle={{}} previousBtnStyle={{backgroundColor:'#393939'}}>
//             <ProgressStep label="First Step" nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
//                 <View style={{ alignItems: 'center',height:100,width:100 }}>
//                     <Text style={{color:'black'}}>This is the content within step 1!</Text>
//                 </View>
//             </ProgressStep>
//             <ProgressStep label="Second Step" nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
//                 <View style={{ alignItems: 'center',height:100,width:100 }}>
//                     <Text>This is the content within step 2!</Text>
//                 </View>
//             </ProgressStep>
//             <ProgressStep label="First Step" nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
//                 <View style={{ alignItems: 'center',height:100,width:100 }}>
//                     <Text style={{color:'black'}}>This is the content within step 1!</Text>
//                 </View>
//             </ProgressStep>
//             <ProgressStep label="Second Step" nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
//                 <View style={{ alignItems: 'center',height:100,width:100 }}>
//                     <Text>This is the content within step 2!</Text>
//                 </View>
//             </ProgressStep>
//             <ProgressStep label="First Step" nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
//                 <View style={{ alignItems: 'center',height:100,width:100 }}>
//                     <Text style={{color:'black'}}>This is the content within step 1!</Text>
//                 </View>
//             </ProgressStep>
//             <ProgressStep label="Second Step" nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
//                 <View style={{ alignItems: 'center',height:100,width:100 }}>
//                     <Text>This is the content within step 2!</Text>
//                 </View>
//             </ProgressStep>
//             <ProgressStep label="First Step" nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
//                 <View style={{ alignItems: 'center',height:100,width:100 }}>
//                     <Text style={{color:'black'}}>This is the content within step 1!</Text>
//                 </View>
//             </ProgressStep>
//             <ProgressStep label="Second Step" nextBtnTextStyle={buttonTextStyle} previousBtnTextStyle={buttonTextStyle}>
//                 <View style={{ alignItems: 'center',height:100,width:100 }}>
//                     <Text>This is the content within step 2!</Text>
//                 </View>
//             </ProgressStep>
//         </ProgressSteps>
//     </View>
//     // </View>
    
    
    
//   )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//       },
//       title: {
//         fontSize: 20,
//         fontWeight: 'bold',
//       },
//       progressBar: {
//         width: '100%',
//         height: 20,
//         backgroundColor: '#ccc',
//       },
//       content: {
//         marginTop: 20,
//       },
// });

import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';

class ModuleCard extends Component {
  static navigationOptions = {
    header: null,
  };

  defaultScrollViewProps = {
    keyboardShouldPersistTaps: 'handled',
    contentContainerStyle: {
      flex: 1,
      justifyContent: 'center',
    },
  };

  onNextStep = () => {
    console.log('called next step');
  };

  onPrevStep = () => {
    console.log('called previous step');
  };

  onSubmitSteps = () => {
    console.log('called on submit step.');
  };

  render() {
    const progressStepsStyle = {
      activeStepIconBorderColor: 'lightblue',
      activeLabelColor: 'black',
      activeStepNumColor: 'black',
      activeStepIconColor: 'lightblue',
      completedStepIconColor: 'lightgreen',
      completedCheckColor: 'green',
    };

    const containerStyle = {
      padding: 60, 
    };

    const buttonTextStyle = {
      color: '#686868',
      fontWeight: 'bold',
    };

    return (
        <View style={{flex: 1}}>
        <ProgressSteps nextBtnStyle={{backgroundColor:'black'}} previousBtnStyle={{backgroundColor:'#393939'}}>
            <ProgressStep label="First Step" nextBtnStyle={{position:'absolute',top:580,right:0}} previousBtnStyle={{position:'absolute',top:580,left:0}}>
                <View style={{ alignItems: 'center',height:100,width:100,zIndex:1 }}>
                    <Text>This is the content within step 1!</Text>
                </View>
            </ProgressStep>
            <ProgressStep label="Second Step" nextBtnStyle={{position:'absolute',top:580,right:0}} previousBtnStyle={{position:'absolute',top:580,left:0}}>
                <View style={{ alignItems: 'center' }}>
                    <Text>This is the content within step 2!</Text>
                </View>
            </ProgressStep>
            <ProgressStep label="Third Step">
                <View style={{ alignItems: 'center' }}>
                    <Text>This is the content within step 3!</Text>
                </View>
            </ProgressStep>
        </ProgressSteps>
    </View>
    );
  }
}

export default ModuleCard;
