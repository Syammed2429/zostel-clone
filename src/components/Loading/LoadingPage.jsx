import styled from "styled-components"

const LogoCont = styled.div`
    position: absolute;
    /* width: 200px; */
    /* height: 182px; */
    left: calc(50% - 200px/2);
    top: 300px;
    text-align:center;

    .logo{
        background: #FFFFFF;
        padding: 10px;
        border-radius: 50%;
        box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
    }
    h4{
        font-weight: 700;
        line-height: 36px;
    }
    
    
`;

export const LoadingPage = () => {
    return (
        <div>
            <LogoCont>
                <img className="logo" src="Logo.svg" />
                <h4>Follow your <img src="Heart.svg" alt="" /> </h4>
            </LogoCont>
        </div>
    )
}
