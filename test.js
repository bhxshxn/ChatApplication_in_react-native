const axios = require('axios');
const getMsg = async () => {
    await axios.post('http://whatsapp-reactp.herokuapp.com/getMessages', {
        user: 'Bhushan', name: 'Vivek'
    }).then(result => {
        console.log('work')
        console.log(result.data)

    }).catch(err => console.log(err))
}
getMsg();