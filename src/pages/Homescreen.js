import React from 'react'
import "../pages/homescreeen.css"
import axios from "axios"
import { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';


function Homescreen() {


    let [user, setUser] = useState([])
    let [loading, setLoading] = useState(true);

    localStorage.setItem("mydata", JSON.stringify(user))
   


    useEffect(async () => {


        try {
            setLoading(true)
            const data = (await axios.get("https://60cad4d221337e0017e431c7.mockapi.io/users")).data
            setUser(data)
            setLoading(false)


        } catch (error) {
            console.log(error)
        }

    }, [])


    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://60cad4d221337e0017e431c7.mockapi.io/users/${id}`)
            localStorage.removeItem(id)
            window.location.replace("/");
        } catch (err) { }

    }

    return (
                    

            <div  className='user-list'>
                <Typography  className='bg' sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                             {`${"The total users  "}`+user.length}
                 </Typography>

                 <hr/>

                {loading ? <CircularProgress/> : user.map((users) => (
                    <Card  sx={{ minWidth: 20 }}>

                        <CardContent>

                            <Avatar align="center" alt={users.name} src={users.avatar} />

                            <Typography key={users.id} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {users.name}
                            </Typography>

                            <Button onClick={() => handleDelete(users.id)} variant="contained" startIcon={<DeleteIcon />}>
                                Delete
                            </Button>

                        </CardContent>
                    </Card>
                ))}
                
            </div>

        

    )
}

export default Homescreen