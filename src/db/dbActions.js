import { retrieveData } from '../storage/localstorage'
import axios from 'axios'
import { nanoid } from 'nanoid'

export async function getTasks(){
    try {
        console.log("Connecting to the database...")
        const data = await retrieveData();
        await axios.post(`${data.url}/find`, {
            "collection":"todos",
            "database":"test",
            "dataSource":"tasksdata",
            "filter": {"status": "pending"}
        }, {
            headers: {
                'content-type': 'application/json',
                'Access-Control-Request-Headers': '*',
                'api-key': `${data['api-key']}`
            }
        })
        .then((response) => {
            if (response.data) {
                return response.data;
            }
        })
        .catch((err) => {
            alert("Error has happened trying to get data, please try again")
            console.log(err)
        })
    } catch (error) {
        console.log('Error: ', error);
    }
}

export async function getTasksCompleted(){
    try {
        console.log("Connecting to the database...")
        const data = await retrieveData();
        await axios.post(`${data.url}/find`, {
            "collection":"todos",
            "database":"test",
            "dataSource":"tasksdata",
            "filter": {"status": "completed"}
        }, {
            headers: {
                'content-type': 'application/json',
                'Access-Control-Request-Headers': '*',
                'api-key': `${data['api-key']}`
            }
        })
        .then((response) => {
            if (response.data) {
                return response.data;
            }
        })
        .catch((err) => {
            alert("Error has happened trying to get data, please try again")
            console.log(err)
        })
    } catch (error) {
        console.log('Error: ', error);
    }
}

export async function addTask({name,detail,status}){
    try {
        console.log("Connecting to the database...")
        const data = await retrieveData();
        await axios.post(`${data.url}/insertOne`, {
            "collection":"todos",
            "database":"test",
            "dataSource":"tasksdata",
            "document": {
                "name": name,
                "detail": detail,
                "status": status,
                "note": "",
                "code": nanoid(3)
            }
        }, {
            headers: {
                'content-type': 'application/json',
                'Access-Control-Request-Headers': '*',
                'api-key': `${data['api-key']}`
            }
        })
        .then((response) => {
            if (response.data) {
                return response.data;
            }
        })
        .catch((err) => {
            alert("Error has happened trying to get data, please try again")
            console.log(err)
        })
    } catch (error) {
        console.log('Error: ', error);
    }
}

export async function searchTask(taskDetail){
    try {
        console.log("Connecting to the database...")
        const data = await retrieveData();
        await axios.post(`${data.url}/findOne`, {
            "collection":"todos",
            "database":"test",
            "dataSource":"tasksdata",
            "filter": {"text": taskDetail}
        }, {
            headers: {
                'content-type': 'application/json',
                'Access-Control-Request-Headers': '*',
                'api-key': `${data['api-key']}`
            }
        })
        .then((response) => {
            if (response.data) {
                return response.data;
            }
        })
        .catch((err) => {
            alert("Error has happened trying to get data, please try again")
            console.log(err)
        })
    } catch (error) {
        console.log('Error: ', error);
    }
}

export async function updateTask({code,name,detail,status,note}){
    const updatedObj = {};
    if(name){
        updatedObj = {
            "name": name
        }
    }else if(name, detail){
        updatedObj = {
            "name": name,
            "detail": detail
        }
    }else if(name,detail,status){
        updatedObj = {
            "name": name,
            "detail": detail,
            "status": status
        }
    }else if(name,detail,status,note){
        updatedObj = {
            "name": name,
            "detail": detail,
            "status": status,
            "note": note
        }
    }

    try {
        console.log("Connecting to the database...")
        const data = await retrieveData();
        await axios.post(`${data.url}/updateOne`, {
            "collection":"todos",
            "database":"test",
            "dataSource":"tasksdata",
            "filter" :{ "code" : code},
            "update": {
                "$set":{
                    ...updatedObj
                } 
            }
        }, {
            headers: {
                'content-type': 'application/json',
                'Access-Control-Request-Headers': '*',
                'api-key': `${data['api-key']}`
            }
        })
        .then((response) => {
            if (response.data) {
                return response.data;
            }
        })
        .catch((err) => {
            alert("Error has happened trying to get data, please try again")
            console.log(err)
        })
    } catch (error) {
        console.log('Error: ', error);
    }
}

export async function deleteTask(code){
    try {
        console.log("Connecting to the database...")
        const data = await retrieveData();
        await axios.post(`${data.url}/deleteOne`, {
            "collection":"todos",
            "database":"test",
            "dataSource":"tasksdata",
            "filter": {"code": code}
        }, {
            headers: {
                'content-type': 'application/json',
                'Access-Control-Request-Headers': '*',
                'api-key': `${data['api-key']}`
            }
        })
        .then((response) => {
            if (response.data) {
                return response.data;
            }
        })
        .catch((err) => {
            alert("Error has happened trying to get data, please try again")
            console.log(err)
        })
    } catch (error) {
        console.log('Error: ', error);
    }
}