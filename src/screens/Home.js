import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  FlatList, Modal, Pressable, Touchable} from 'react-native';
import { clearData } from '../storage/localstorage';
import CircleButton from '../components/Circlebutton';
import { useEffect, useState } from 'react';
import Task from '../components/Task'
import {addTask, getTasks, getTasksCompleted, updateTask, deleteTask, searchTask} from '../db/dbActions'

export default function Home() {
  const [data, setData] = useState([])
  const [isFetching, setIsFetching] = useState(false);
  const [showInfo, setShowInfo] = useState(false)
  const [readCompletedModal, setreadCompletedModal] = useState(false)
  const [readUncompletedModal, setreadUncompletedModal] = useState(false)
  const [updateModal, setupdateModal] = useState(false)
  const [searchModal, setsearchModal] = useState(false)
  const [deleteModal, setdeleteModal] = useState(false)
  const [newTaskModal, setnewTaskModal] = useState(false)


  const taskOperationFunction = (operation) => {
    switch (operation) {
      case 'addTask':
        addTask()
        break;
    
      default:
        break;
    }
  }
  useEffect(() => {

  }, [])

  async function onRefresh() {
    setIsFetching(true)
    const res = await getTasks();
    console.log("Data:", ...res)
    setData(res);
    setIsFetching(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Taskmanager!</Text>
      <View style={styles.menu}>        
      </View>
      <Modal
            animationType="slide"
            transparent={true}
            visible={showInfo}
            onRequestClose={() => {
                setShowInfo(!showInfo);
            }}
            >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View style={styles.row}>
                    <Pressable style={[styles.button, styles.buttonClose]} onPress={() => {
                      setShowInfo(!showInfo)
                      setreadUncompletedModal(!readUncompletedModal)
                    }}>
                        <Text style={styles.text}>Read Uncompleted</Text>
                    </Pressable>
                    <Pressable style={[styles.button, styles.buttonClose]} onPress={() => {
                        setShowInfo(!showInfo)
                        setreadCompletedModal(!readCompletedModal)
                      }}>
                        <Text style={styles.text}>Read Completed</Text>
                    </Pressable>
                  </View>
                  <View style={styles.row}>
                    <Pressable style={[styles.button, styles.buttonClose]} onPress={() => {
                        setShowInfo(!showInfo)
                      setupdateModal(!updateModal)
                    }}>
                        <Text style={styles.text}>Update</Text>
                    </Pressable>
                    <Pressable style={[styles.button, styles.buttonClose]} onPress={() => {
                      setShowInfo(!showInfo)
                      setsearchModal(!searchModal)
                    }}>
                        <Text style={styles.text}>Search</Text>
                    </Pressable>
                  </View>
                  <View style={styles.row}>
                    <Pressable style={[styles.button, styles.buttonClose]} onPress={() => {
                        setShowInfo(!showInfo)
                        setdeleteModal(!deleteModal)
                      }}>
                        <Text style={styles.text}>Delete</Text>
                    </Pressable>
                    <Pressable style={[styles.button, styles.buttonClose]} onPress={() => {
                      setShowInfo(!showInfo)
                      setnewTaskModal(!newTaskModal)
                    }}>
                        <Text style={styles.text}>New Task</Text>
                    </Pressable>
                  </View>
                  <View style={styles.menu}>
                    <CircleButton onPress={() => setShowInfo(!showInfo)} text={"remove"}/>
                  </View>
                </View>
            </View>
      </Modal> 
      <Modal
            animationType="slide"
            transparent={true}
            visible={readUncompletedModal}
            onRequestClose={() => {
                setreadUncompletedModal(!readUncompletedModal);
            }}
            >
            <View style={styles.centeredView}>
                <View style={styles.modalViewOperations}>
                  <FlatList
                    style={styles.flatlist}
                    onRefresh={() => onRefresh()}
                    refreshing={isFetching}
                    data={data}
                    renderItem={(task) => (
                      <Task key={task.code} code={task.code} name={task.name} detail={task.detail} status={task.status} note={task.note} />
                    )}
                    keyExtractor={task => task.code}
                  />
                </View>
            </View>
      </Modal>
      <CircleButton onPress={() => setShowInfo(true)} text={"add"}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E21',
    alignItems: 'center',
    justifyContent: 'center'
  },
  menu: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginBtn: {
    margin: 10,
    width: "35%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#3880ff",
    width: 110
  },
  loginText: {
    color: "#FFFFFF",
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    marginBottom: 500,
    color: '#3880ff'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    marginBottom: -55
  },
  modalView: {
    display: 'flex',
    alignItems: 'center',
    width: '98%',
    height: '65%',
    marginBottom: -500,
    backgroundColor: '#1E1E21',
    borderRadius: 50,
    padding: 35,
    shadowColor: "#3880ff",
    shadowOffset: {
      width: -1,
      height: -10
    },
    shadowOpacity: 0.55,
    shadowRadius: 15,
    elevation: 50
  },
  modalViewOperations: {
    display: 'flex',
    alignItems: 'center',
    width: '98%',
    height: '85%',
    marginBottom: -200,
    backgroundColor: '#1E1E21',
    borderRadius: 50,
    padding: 35,
    shadowColor: "red",
    shadowOffset: {
      width: -1,
      height: -10
    },
    shadowOpacity: 0.55,
    shadowRadius: 15,
    elevation: 50
  },
  button: {
    margin: 10,
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width: 150,
    height: 50,
  },
  text:{
    color: '#fff',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: '800',
  },
  textExit: {
    fontWeight: '900',
  },
  buttonClose: {
    backgroundColor: "#3880ff",
  },
  exitButton:{
    display: 'flex',
    justifyContent: 'center',
    fontWeight: '900',
    backgroundColor: "#bd1111",
    borderRadius: 10,
    margin: 50,
    width: 200,
    height: 35
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  flatlist: {
    marginTop: 40,
    width: "100%"
  }
});
