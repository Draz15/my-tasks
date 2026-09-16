const { MongoClient, ObjectId } = require('mongodb');

const url = "mongodb://localhost:27017"

const client = new MongoClient(url)

const users = [
    {
        name: "Jo",
        age: 27,
        city: 'cairo',
    },
    {

        name: "mahaa",
        age: 29,
        city: 'cairo',
    },

    {

        name: "omar",
        age: 27,
        city: 'alex',
    },
    {

        name: "mostafa",
        age: 21,
        city: 'cairo',
    },

    {

        name: "ahmed",
        age: 30,
        city: 'alex',
    },
    {
        name: "Jo",
        age: 27,
        city: 'cairo',
    },
    {

        name: "mahaa",
        age: 29,
        city: 'cairo',
    },

    {

        name: "omar",
        age: 27,
        city: 'alex',
    },
    
    {

        name: "mostafa",
        age: 27,
        city: 'cairo',
    },

    {

        name: "ahmed",
        age: 27,
        city: 'alex',
    },
    {

        name: "mostafa",
        age: 27,
        city: 'cairo',
    },

    {

        name: "ahmed" ,
        age: 27,
        city: 'alex' ,
    }
]

const addUsersCollection = async () => {
    try {
        // start the connection with mongodb 
        await client.connect()

        // make the db and collections
        const db = client.db("testOne")
        return await db.collection("users")
    } catch (error) {
        console.log(error)
    }
}



// add new user to database

const addUser = async (userData,usersCollection) => {
    try {

        const result = await usersCollection.insertOne(userData)

        console.log("users Id", result.insertedId)

    } catch (error) {
        console.log(error)
    }

}

// add many users to database

const addManyUsers = async (usersCollection,usersData) => {

    const result = await usersCollection.insertMany(usersData)

    console.log(" number of inserted ", result.insertedCount)
}

// find user by id 

const findUser = async (usersCollection, id) => {
    const result = await usersCollection.findOne({ _id: new ObjectId(id) })
    console.log(" number of inserted ", result)
}

// find users by specific data 

const findAllUsers = async (usersCollection) => {

    const result = await usersCollection.find({ age: 27 }).toArray()

    console.log(" all users with age 27 ", result)
}

const countAllUsers = async (usersCollection) => {

    const count = await usersCollection.countDocuments({ age: 27 })

    console.log(" number of inserted ", count)
}

// find limited users by specific data 

const findLimitedUsers = async (usersCollection) => {

    const result = await usersCollection.find({ age: 27 }).limit(3).toArray()

    console.log(" number of inserted ", result.length)
}


// update user using id 

const updateUser = async (usersCollection,id,newName,incAge) => {
    const result = await usersCollection.updateOne({
        _id: new ObjectId(id)
    }, {
        $set: { name: newName },
        $inc: { age: incAge }
    })

    console.log("number of modified :", result.modifiedCount)
}

// update All users  

const updateAllUsers = async (usersCollection) => {
    const result = await usersCollection.updateMany({},{
        $inc: { age: 5 }
    })

    console.log("number of modified :", result.modifiedCount)
}


// delete user using id 

const deleteUser = async ( usersCollection,id) => {
    const result = await usersCollection.deleteOne({
        _id: new ObjectId(id)
    })

    console.log("number of deleted :", result.deletedCount)
}

// delete all users using  

const deleteAllUsers = async (usersCollection) => {
    const result = await usersCollection.deleteMany({})

    console.log("number of deleted :", result.deletedCount)
}


const user = {
    name : "sara",
    age: 22,
    city: "alex"
}


const main = async () => {
    const usersCollection = await addUsersCollection()
    await deleteUser(usersCollection,"6aab101620bd812b5f717145")
}

main()
