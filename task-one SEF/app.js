import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { User } from "./user.js";

const commands = new User();

const yarg = yargs(hideBin(process.argv));

yarg.command({
    command: "add",
    describe: "add new user",

    builder: {
        id: {
            describe: "user id",
            demandOption: true,
            type: "string"
        },
        firstName: {
            describe: "user first name",
            demandOption: true,
            type: "string"
        },
        lastName: {
            describe: "user last name",
            demandOption: true,
            type: "string"
        },
        age: {
            describe: "user age",
            demandOption: true,
            type: "string"
        },
        city: {
            describe: "user city",
            demandOption: true,
            type: "string"
        }
    },

    handler: (data) => {
        commands.Add(data);
    }
});


yarg.command({
    command: "find",
    describe: "check if the user exist",
    builder: {
        id: {
            describe: 'user id',
            demandOption: true,
            type: "string"
        },

    },
    handler: (Data) => {
        let status = commands.Find(Data.id);
        if (status) {
            console.log("User is exist")
        } else {
            console.log("not found")
        }
    }

});

yarg.command({
    command: "view",
    describe: "view one user",
    builder: {
        id: {
            describe: 'user id',
            demandOption: true,
            type: "string"
        },

    },
    handler: (Data) => {
        let exist = commands.View(Data.id);
        if (!exist) {
            console.log("Error")
        }
        console.log(exist)
    }
});

yarg.command({
    command: "viewAll",
    describe: "view all users",
    handler: () => {
        let users = commands.ViewAll()
        users.forEach(el => {
            console.log(el)
        })
    }

});

yarg.command({
    command: "list-users",
    describe: "list users names and cites",
    handler: () => {
        let users = commands.ViewAll()
        users.forEach(element => {
            console.log(`full name : ${element.firstName} ${element.lastName} ,  city : ${element.city}`)
        })
    }

});



yarg.command({
    command: "delete",
    describe: "Delete one user",
    builder: {
        id: {
            describe: 'user id',
            demandOption: true,
            type: "string"
        },

    },
    handler: (Data) => {
        let status = commands.Delete(Data.id);
        if (!status) console.log("Error....................")

        else console.log("Deleted Successfully")
    }

});

yarg.command({
    command: "deleteAll",
    describe: "Delete all users",
    handler: () => {
        const status = commands.DeleteAll();
        if (!status) {
            console.log("there is no data to delete")
            return;
        }

        console.log("All Deleted Successfully")
    }

})

yarg.parse();