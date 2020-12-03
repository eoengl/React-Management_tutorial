const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const port =process.env.PORT || 5000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id' : 1,
            'image' : 'https://placeimg.com/64/64/1',
            'name' : '홍길동',
            'birthday' : '961222',
            'gender' : '남자',
            'job' : '대학생'
        },
        {
            'id' : 2,
            'image' : 'https://placeimg.com/64/64/2',
            'name' : '루콩',
            'birthday' : '930923',
            'gender' : '여자',
            'job' : '자영업자'
        },
        {
            'id' : 3,
            'image' : 'https://placeimg.com/64/64/3',
            'name' : '노돈누',
            'birthday' : '920502',
            'gender' : '남자',
            'job' : '요리사'
        }
      ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
