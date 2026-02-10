import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons"

const App = () => {

  const [numberLikes, setNumberLikes] = useState(504);
  const [likeColor, setLikeColor] = useState("gray");
  const [bookmarkName, setBookmarkName] = useState("bookmark-outline");

  const handleLikes = () => {
    if (likeColor == "red") {
      setNumberLikes(numberLikes - 1);
      setLikeColor("gray");
    } else {
      setNumberLikes(numberLikes + 1);
      setLikeColor("red");
    }
  }

  const handleBook = () => {
    if (bookmarkName == "bookmark-outline") {
      setBookmarkName("bookmark");
    } else {
      setBookmarkName("bookmark-outline");
    }
  }

  return (
      <View style={styles.container}>
      <View style={styles.headerCont}>
        <Image style={styles.header} source={require('./assets/img/header.png')}></Image>
      </View>
      <View style={styles.usernameCont}>
        <View style={styles.userCont}>
          <Image style={styles.user} source={require('./assets/img/user.png')}></Image>
        </View>
        <Text style={styles.username}>Username</Text>
        <Text style={styles.seeMore}>...</Text>
      </View>
      <View style={styles.imgCont}>
        <Image style={styles.content} source={require('./assets/img/content.png')}></Image>
      </View>
      <View style={styles.interactFull}>
        <View style={styles.interactCont}>
          <TouchableOpacity onPress={handleLikes}>
            <Ionicons name="heart" size={30} color={likeColor}></Ionicons>
            <Text marginLeft={5} fontWeight="bold">{numberLikes}</Text>
          </TouchableOpacity>
          <Ionicons name="chatbubble-outline" size={30} color="gray"></Ionicons>
          <Ionicons name="paper-plane" size={30} color="gray"></Ionicons>
        </View>
        <TouchableOpacity onPress={handleBook}>
          <Ionicons name={bookmarkName} size={30} color="gray" marginBottom={15} ></Ionicons>
        </TouchableOpacity>
      </View>
      <View style={styles.textCont}>
        <Text>17,280 views</Text>
        <View style={styles.caption}><Text>Username instagram template</Text><Text style={styles.hashtag}>#template</Text></View>
        <Text style={styles.light}>View all 370 comments</Text>
        <Text style={styles.light}>4 days ago</Text>
      </View>
      <View style={styles.footerDiv}>
      </View>
      <View style={styles.footerCont}>
        <Image style={styles.footer} source={require('./assets/img/footer.png')}></Image>
      </View>
      </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "flex-start",
  },
  headerCont: {
    width: "100%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  header: {
    width: "60%",
  },
  usernameCont: {
    flexDirection: "row",
    width: "100%",
    height: "8%",
    alignItems: "center"
  },
  userCont: {
    width: "12%",
    height: "auto",
    marginLeft: 20
  },
  user: {
    height: "60%",
    width: "auto",
  },
  username: {
    fontSize: 20,
    marginLeft: 10,
    color: "#0000008a"
  },
  seeMore: {
    fontSize: 40,
    marginLeft: 90,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#0000008a"
  },
  imgCont: {
    height: "40%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    height: "95%",
    width: "95%"
  },
  interactCont: {
    justifyContent: "left",
    alignItems: "left",
    flex: 1,
    flexDirection: "row",
    gap: 10,
    marginLeft: 10
  },
  interact: {
    width: "90%",
  },
  textCont: {
    height: "15%",
    width: "100%",
    paddingLeft: 20,
  },
  footerCont: {
    height: "10%",
    width: "90%",
    justifyContent: "flex-start",
    marginTop: 7
  },
  footer: {
    width: "100%",
    height: "50%"
  },
  light: {
    color: "#00000054",
    fontSize: 14
  },
  hashtag: {
    color: "#4babff",
    marginLeft: 6,
  },
  caption: {
    flex: 1,
    flexDirection: "row",
  },
  footerDiv: {
    backgroundColor: "#656565",
    height: ".2%",
    width: "100%",
    marginTop: 15,
    marginBottom: 4
  },
  interactFull: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 15
  }
});
