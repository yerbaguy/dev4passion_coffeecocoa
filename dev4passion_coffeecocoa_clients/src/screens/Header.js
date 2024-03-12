import { View, Text, FlatList, TouchableOpacity, OnPress } from 'react-native'
import React, { useState, useEffect } from 'react'
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';
import { DocumentSnapshot, QuerySnapshot } from 'firebase/firestore';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import uuid from 'react-native-uuid';
// import  Main  from './Main';
import Main from '../screens/Main';

const Header = ({navigation}) => {

    const [items, setItems] = useState([]);


    const credentials = {
        apiKey: "AIzaSyAAjeOP0ET_Kd52sUDuBOooUt_C3RYo1iQ",
        projectId: "coffeecocoa-a4560",
        // databaseURL: "https://coffeecocoa.firebaseio.com",
        databaseURL: "https://coffeecocoa.firebase.com",
        appId: "1:645137777464:android:a6559bd5890e38673af7cd",
        storageBucket: "",
        messagingSenderId: "645137777464",
    };

    useEffect(() => {
        getItems();
        //    console.log("items", items[0]);

    }, []);


    const onItemClick = (item, props) => {

        let categoryname = ""
        // const navigation = useNavigation();

        // console.log(JSON.stringify(item.data.email));

        console.log(JSON.stringify(item.data.categoryName));
        categoryname = JSON.stringify(item.data.categoryName);
        console.log("categoryname", categoryname);


        //  if (categoryname == "Home") 
        //     categoryname = "Main";

        let categorynamestr = categoryname.toString()
        console.log("categorynamstr", categorynamestr);

        // const userId = uuid.v4();
        // console.log("userid", userId);
        //()=> navigation.navigate('Main')
        // navigation.navigate('Main');

        navigation.navigate(categorynamestr);

    }


    const getItems = async () => {
        const app = firebase.initializeApp(credentials);

        //    const userDocument = await firestore().collection('admin').doc('FVPOxJKETTZi4L29xbpG').get()
        //    console.log("userDocumnt", userDocument);

        firestore()
            .collection('categories')
            .get()
            .then(QuerySnapshot => {
                let tempData = [];
                console.log("querysnakshop size", QuerySnapshot.size);
                //  let tempData = [];
                // const tempData = [];

                QuerySnapshot.forEach(DocumentSnapshot => {
                    console.log("document id",
                        DocumentSnapshot.id,
                        DocumentSnapshot.data(),
                    );
                    // tempData.push({
                    // id: tempData.id,
                    // data: tempData.data(),
                    // });
                    tempData.push({
                        id: DocumentSnapshot.id,
                        data: DocumentSnapshot.data(),
                    });


                    // console.log("tempData", tempData[0]);
                });

                setItems(tempData);


                // tempData.push({
                //     id: tempData.id,
                //     data: tempData.data(),
                // });

            });

        //    setItems(tempData);
        //    console.log("itms", items);


        //    firebase
        //    .firestore()
        //    .collection('admin')
        //    .get()
        //    .then((querySnapshot) => {

        //    })


        //    const ref = firestore().collection('admin').get();
        //    ref.then.QuerySnapshot

        // firestore
        // .collection('admin')
        // .get()
        // .onSnapshot(QueryDocumentSnapshot => {
        //     console.log("admin", QueryDocumentSnapshot.data())
        // })

        //   const admin = await firestore().collection('admin').get();
        //   console.log(admin.email);

        //  try {

        //      firestore().collection('admin').get()
        //          .then(QuerySnapshot => {
        //              console.log("admin", QuerySnapshot.size());
        //              console.log("admin", QuerySnapshot.docs.at(0));
        //              console.log("admin", QuerySnapshot.email);
        //              let tempData = [];
        //              QuerySnapshot.forEach(DocumentSnapshot => {
        //                  console.log(
        //                      "admin",
        //                      DocumentSnapshot.id,
        //                      DocumentSnapshot.data(),);
        //                  tempData.push({
        //                      id: DocumentSnapshot.id,
        //                      data: DocumentSnapshot.data(),
        //                  });
        //                  //)
        //              });
        //              setItems(tempData);
        //          });

        //  } catch (error) {
        //     console.log(error);
        //  }

        // firestore().collection('admin').get()
        // .then(QuerySnapshot => {
        //     console.log("admin", QuerySnapshot.size());
        //     console.log("admin", QuerySnapshot.email);
        //     let tempData = [];
        //     QuerySnapshot.forEach(DocumentSnapshot => {
        //         console.log(
        //             "admin",
        //             DocumentSnapshot.id,
        //             DocumentSnapshot.data(),);
        //             tempData.push({
        //                 id: DocumentSnapshot.id,
        //                 data: DocumentSnapshot.data(),
        //             });
        //         //)
        //     });
        //     setItems(tempData);
        // });




    }






    return (

        <View>
            <Text>Header</Text>

            <FlatList
                horizontal
                data={items}
                renderItem={({ item, index }) => {
                    //   <TouchableOpacity

                    //       onPress={() => console.log("clicked")}
                    //   >
                    //   </TouchableOpacity> 



                    //  return (
                    //      <View><Text>{item.data.email}</Text>
                    //            {/* <Text>{item.data.password}</Text> */}
                    //      </View>            
                    //   );

                    return (
                        <TouchableOpacity
                            //   key={item.data.email}
                            key={item.data.categoryName}
                            //    onPress={() => console.log(item.data.email)}
                            //  onPress={() => { onItemClick(item) }}
                            onPress={() => { navigation.navigate(item.data.categoryName) }}

                        // onPress={() => { onItemClick(item.data.categoryName) }}
                        // onPress={() => { navigation.navigate('Main') }}
                        >
                            {/* <View><Text>{item.data.email}</Text> */}
                            <View><Text>{item.data.categoryName}</Text>
                                {/* <Text>{item.data.password}</Text> */}
                            </View>
                        </TouchableOpacity>
                    );


                }}
            />


        </View>



        // <View>
        //     <Text>Header</Text>
        // </View>
    )
}

export default Header


// import { View, Text } from 'react-native'
// import React from 'react'

// const Header = () => {
//   return (
//     <View>
//       <Text>Header</Text>
//     </View>
//   )
// }

// export default Header