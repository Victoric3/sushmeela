import configData from '../../config.json'

const Caption = ({caption}) => {
    return ( 
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
          }} id={caption}>
          <h2
            variant="h4"
            style={{
              marginTop: "100px",
              fontWeight: "600",
              textAlign: "center",
            }}
            >
            {caption}
          </h2>
          <div style={{
            width: '80px',
            height: '2px',
            marginBottom: "50px",
            background: configData.AppColor
          }}></div>
          </div>
     );
}
 
export default Caption;