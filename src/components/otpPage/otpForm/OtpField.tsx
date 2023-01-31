import { VerifyText } from "../verifyCode/verifyText";
import { OtpHelperText } from "../helperText/HelperText";
import { MobileNo } from "../mobileNo/MobileNo";
import { OtpNo } from "../otpNo/OtpNo";
import { ButtonTwo } from "../Button/ButtonTwo";


interface Props {
  otp: string;
  setOtp: React.Dispatch<React.SetStateAction<string>>;
}


export const OtpField: React.FC<Props> = ({ otp, setOtp }) => {
  
  return (
    <div>
     
        
    <div
      className="verifyDiv"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginBottom: "50px",
      }}
    >
      <VerifyText />
      <div
        className="otpHelpertext"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <OtpHelperText />
      </div>
      <div
                  className="input"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: "20px"
                  }}
                >
      <div
        className="mobileNo"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MobileNo />
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="otp"
      > <div>

        <OtpNo otp={otp} setOtp={setOtp} />

      </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
       <ButtonTwo />
      </div>
      </div>
    </div>
      
</div>
  );
};

