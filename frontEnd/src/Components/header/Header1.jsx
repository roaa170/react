import   { useContext, useState } from "react";
import { ColorModeContext } from "../../theme../../theme";
import { Box, Button, Container, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { DarkModeOutlined, ExpandMore, LightModeOutlined } from "@mui/icons-material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useTranslation } from 'react-i18next';
import {
  FacebookShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon
} from 'react-share';
import { useNavigate } from "react-router-dom";

const options = ["AR", "EN"];

export default function Header1(){
    const colorMode = useContext(ColorModeContext);
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(1);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuItemClick = (event, index) => {
      setSelectedIndex(index);
      setAnchorEl(null);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    }; 

    const { t, i18n } = useTranslation();
    const navigate = useNavigate()
    const shareUrl = 'https://www.pakkamarwadi.tk/';
    //const shareUrl = window.location.href;
    const ChangeToEn = ()=>{
       i18n.changeLanguage("en")
    }
    const ChangeToFr = ()=>{
       i18n.changeLanguage("fr")
    }
    const ChangeToAr = ()=>{
       i18n.changeLanguage("ar")
    }
    const logOut=()=>{
     navigate('/')
    }
    return (<>
    <Box  sx={{
        bgcolor: "#2B3445",
        py: "4px",
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
      }}>
        <Container>
        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
        <Typography
            sx={{
              mr: 2,
              p: "4px 10px",
              bgcolor: "#D23F57",
              borderRadius: "12px",
              fontSize: "12px",
              fontWeight: "bold",
              color: "#fff",
            }}
            variant="body2"
          >
            {t("HOT")}
          </Typography>

          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 300,
              color: "#fff",
            }}
            variant="body2"
          >
           { t("Free Express Shipping")}
          </Typography>
          <Box flexGrow={1} />
     <div style={{marginRight:"-50px"}}> 
      {theme.palette.mode === "light" ? (
        <IconButton sx={{
            marginRight:"20px",
        }}
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            //colorMode.toggleColorMode();
            
          }}
          color="inherit"
        >
    
          <LightModeOutlined fontSize="small" sx={{color:"white"}} />
        </IconButton>
      ) : (
        <IconButton sx={{
            marginRight:"20px",
        }}
          onClick={() => {
            localStorage.setItem(
              "mode",
              theme.palette.mode === "dark" ? "light" : "dark"
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
        >
          <DarkModeOutlined fontSize="small" />
        </IconButton>
      )}
    </div>








    <List 
            component="nav"
            aria-label="Device settings"
            sx={{ p: 0, m: 0 }}
          >
            <ListItem
              id="lock-button"
              aria-haspopup="listbox"
              aria-controls="lock-menu"
              aria-label="when device is locked"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
              sx={{ "&:hover": { cursor: "pointer" }, px: 1 }}
            >
              <ListItemText
                sx={{
                  ".MuiTypography-root": { fontSize: "11px", color: "#fff" },
                }}
                secondary={options[selectedIndex]}
              />
              <ExpandMore sx={{ fontSize: "16px", color: "#fff" }} />
            </ListItem>
          </List>


          <Menu 
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            
            <MenuItem >
            <Button onClick={ChangeToEn}>EN</Button>
            </MenuItem> 
            <MenuItem >
            <Button onClick={ChangeToFr}>FR</Button>
            </MenuItem> 
            <MenuItem >
            
            </MenuItem> 
           
           
            
          </Menu>







<TwitterShareButton
  url={shareUrl}
  // @ts-ignore
  quote={'Title or jo bhi aapko likhna ho'}
  hashtag={'#portfolio...'}
>
<TwitterIcon size={20} round={true}
            style={{
             
                fontSize: "16px",
                color: "#fff",
            }}
          />
</TwitterShareButton>
    
            
<FacebookShareButton
          url={shareUrl}
          // @ts-ignore
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <FacebookIcon size={20} round={true} style={{
                
              fontSize: "16px",
              color: "#fff",
            }} />
        </FacebookShareButton>

        <WhatsappShareButton
          url={shareUrl}
          // @ts-ignore
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}
        >
          <WhatsappIcon size={20} round={true}
          style={{
            
          fontSize: "16px",
          color: "#fff",
        }}
          />
        </WhatsappShareButton>
        
        <LinkedinShareButton  url={shareUrl}
          // @ts-ignore
          quote={'Title or jo bhi aapko likhna ho'}
          hashtag={'#portfolio...'}>
          <LinkedinIcon size={20} round={true} />
        </LinkedinShareButton>
        
        <Button variant="outlined" onClick={logOut}>  { t("log out")} </Button>
        


         
        </Stack>
        </Container>
        
        
    </Box>
    </>)
}