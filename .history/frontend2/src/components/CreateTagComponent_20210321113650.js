import { TextField } from '@material-ui/core'
import React from 'react'

export default function CreateTagComponent() {
    return (
        <div>
            <div 
                className="col-12 d-flex align-items-center"
                style={{
                    height: 200,
                    backgroundColor: "#000"
                }}
            >
                <div className="col-12">
                    <TextField 
                        className="col-12"
                        variant="outlined"
                        color="info"
                        inputProps={{
                            style: {
                                fontSize: 78,
                                color: "#fff3"
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
