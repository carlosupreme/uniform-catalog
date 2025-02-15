import * as React from "react";
import {ChangeEvent} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import {useGetLeagues} from "../../hooks/useGetLeagues.ts";
import CloseIcon from '@mui/icons-material/Close';
import FilterListIcon from '@mui/icons-material/FilterList';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
};

export default function FilterModal({onSelect, current}: { onSelect: (league: string) => void, current: string }) {
    const [open, setOpen] = React.useState(false);
    const {data: dataLeague} = useGetLeagues();

    const handleLeagueChange = (event: ChangeEvent<HTMLInputElement>) => {
        const league = event.target.value;
        onSelect(league);
        setOpen(false);
    };

    const handleRemoveFilter = () => {
        onSelect("todas");
    };

    return (
        <div>
            {current === "todas" ? (
                <Button
                    onClick={() => setOpen(true)}
                    variant="outlined"
                    startIcon={<FilterListIcon/>}
                    sx={{
                        color: 'black',
                        borderColor: 'black',
                        '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.04)',
                            borderColor: 'black',
                        }
                    }}
                >
                    Filtrar por liga
                </Button>
            ) : (
                <Button
                    onClick={() => setOpen(true)}
                    variant="contained"
                    endIcon={
                        <CloseIcon
                            onClick={(e) => {
                                e.stopPropagation();
                                handleRemoveFilter();
                            }}
                        />
                    }
                    sx={{
                        backgroundColor: 'black',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        }
                    }}
                >
                    Liga: {current}
                </Button>
            )}
            <Modal open={open} onClose={() => setOpen(false)}>
                <Box sx={style}>
                    <Typography variant="h6" component="h2" sx={{color: 'black', mb: 2}}>
                        Filtrar por Liga de Fútbol
                    </Typography>
                    <Divider sx={{my: 2, backgroundColor: 'black'}}/>
                    <RadioGroup onChange={handleLeagueChange}>
                        <FormControlLabel
                            key={"todas"}
                            value={"todas"}
                            control={<Radio checked={current === "todas"}
                                            sx={{color: 'black', '&.Mui-checked': {color: 'black'}}}/>}
                            label={"Todas las ligas"}
                        />
                        {dataLeague?.map((liga) => (
                            <FormControlLabel
                                key={liga.documentId}
                                value={liga.nombre}
                                control={<Radio checked={current === liga.nombre}
                                                sx={{color: 'black', '&.Mui-checked': {color: 'black'}}}/>}
                                label={liga.nombre}
                            />
                        ))}
                    </RadioGroup>
                    <Divider sx={{my: 2, backgroundColor: 'black'}}/>
                    <Box sx={{display: "flex", justifyContent: "flex-end", mt: 3}}>
                        <Button
                            variant="contained"
                            onClick={() => setOpen(false)}
                            sx={{
                                backgroundColor: 'black',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                }
                            }}
                        >
                            Cerrar
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}