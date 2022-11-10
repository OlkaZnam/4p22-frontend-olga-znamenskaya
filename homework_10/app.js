const url = 'https://reqres.in/api/users?per_page=12'
fetch(url)
    .then(response => response.json())
    .then((responseData) => {
        // код для выполнения пункта 1
        console.log('-----------')
        console.log('Пункт №1:')
        console.log('-----------')

        console.log(responseData)

        // код для выполнения пункта 2
        console.log('-----------')
        console.log('Пункт №2:')
        console.log('-----------')

        const users = responseData.data;
        users.forEach((user) => {
            console.log(user.last_name)
        });

        // код для выполнения пункта 3
        console.log('-----------')
        console.log('Пункт №3:')
        console.log('-----------')

        const filteredUsers = users.filter((user) => {
            return user.last_name[0].toUpperCase() === 'F'
        })

        filteredUsers.forEach((user) => {
            console.log(user.last_name)
        })

        // код для выполнения пункта 4
        console.log('-----------')
        console.log('Пункт №4:')
        console.log('-----------')

        const introText = 'Наша база содержит данные следующих пользователей:';
        const resultText = users.reduce((previousValue, currentValue) => {
            const { first_name, last_name } = currentValue
            return previousValue + `\n ${first_name} ${last_name}`
        }, introText)
        console.log(resultText)

        // код для выполнения пункта 5
        console.log('-----------')
        console.log('Пункт №5:')
        console.log('-----------')

        const usersKeys = Object.keys(responseData)
        usersKeys.forEach((key) => {
            console.log(key)
        })

    })