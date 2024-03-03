import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20, 
  },
stockcard: {
    height: "auto",
    alignSelf: 'center',
    width: '85%',
    borderRadius: 21,
    backgroundColor: 'black',
    marginTop: 15, 
  },

  stockcardl: {
    height: "auto",
    alignSelf: 'center',
    width: '85%',
    borderRadius: 21,
    backgroundColor: 'black',
    marginTop: 15,
    marginBottom: 15, 
  },

  Name: {
    color: 'black',
    fontSize: 16,
    marginLeft: 25, 
    marginTop: 20,
    fontWeight: 'bold',
},

  stockname: {
    color: 'white',
    fontSize: 16,
    marginLeft: 25, 
    marginTop: 20,
    fontWeight: 'bold',
},

price: {
  color: 'white',
  fontSize: 16,
  marginLeft: 25, 
  marginTop: 5,
  fontSize: 32,
  fontWeight: 'bold',
},
text: {
    fontSize: 16,
    marginLeft: 30,
    color: 'white',
    fontWeight: 'thin',
  },

  risk: {
    fontSize: 16,
    marginLeft: 30,
    color: '#ACFE91',
    fontWeight: 'thin',
    marginTop: 9,
    marginBottom:18,
  },



  space: {
    fontSize: 19,
  },

  searchBarContainer: {
    marginTop: 20,
    padding: 10,
    width: "92%",
    alignSelf:"center" ,
    backgroundColor: '#E7E8E8',
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  searchBar: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    alignSelf: "center",
  },

  searchIcon: {
    width: 20,
    height: 20,
    tintColor: '#666',
  },

  plusButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#1B1B1B', 
    padding: 10,
    borderRadius: 20,
  },

});

export default styles;