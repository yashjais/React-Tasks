import React from 'react'
import axios from 'axios'

class JsonPlaceholder extends React.Component {
    constructor() {
        super()
        this.state = {
            photos: []
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(response => {
                response.data.length = 10
                const photos = response.data
                this.setState({ photos })
            })
            .catch(err => alert(err))
    }
    render() {
        return (
            <div>
                <h1>JsonPlaceholder</h1>
                <ul>
                    {
                        this.state.photos.map(photo => {
                            return (
                                <div key={photo.id}>
                                    <img src={`${photo.thumbnailUrl}`} alt="" />
                                    <p>Title - {photo.title}</p>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default JsonPlaceholder