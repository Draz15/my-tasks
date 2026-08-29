import fs from "fs"


export class User {

    // getting the data saved in Data file 

    static getData = function () {
        try {
            const Data = fs.readFileSync('Data.json').toString()
            return JSON.parse(Data)

        } catch {
            return []
        }
    }

    // saving the data in Data file 

    static saveData(Data) {
        const savedData = JSON.stringify(Data)
        fs.writeFileSync("Data.json", savedData)
    }

    // adding new user to Data file 

    Add(user) {
        const { id, firstName, lastName, age, city } = user

        const Data = User.getData()

        let exist = Data.some(el => el.id == id)

        if (exist) console.log("Duplicated Data")

        Data.push({ id, firstName, lastName, age, city })
        User.saveData(Data)
        console.log("User Add Successfully")
    }

    // checking the user exist or not in Data file

    Find(id) {
        const Data = User.getData()
        let exist = Data.some(el => el.id == id)

        return exist
    }

    // View specific user from Data file  

    View(id) {
        const Data = User.getData()
        let user = Data.filter(el => el.id == id) ?? false

        return user[0];
    }

    // View All users from Data file  

    ViewAll() {
        const Data = User.getData()

        return Data
    }

    // Delete specific user from Data file  

    Delete(id) {
        const Data = User.getData()
        const newData = Data.filter(el => el.id != id);

        if (newData.length == Data.length) return false;

        User.saveData(newData);
        return true;

    }

    // Delete All users from Data file  

    DeleteAll() {
        const Data = User.getData()
        if (Data.length < 1) {
            return false
        }
        const newData = [];
        User.saveData(newData);
        return true;
    }

};
