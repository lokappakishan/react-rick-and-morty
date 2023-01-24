import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import Image from "next/image";

function CharacterCard(props){

    
    
    console.log(props.characterName);

    return(
    <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
        <Image src={props.characterImage} alt={props.characterName}/>
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {props.characterName}
        </Typography>
        </CardContent>
    </CardActionArea>
    <CardActions>
        <Button size="small" color="primary">
        Share
        </Button>
    </CardActions>
    </Card>)
}

export default CharacterCard;