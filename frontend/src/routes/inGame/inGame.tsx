import { Button, Container, Row, Col, InputGroup, Form } from "react-bootstrap"; // 꼭 import를 해와야한다
import "./inGame.css";
import Canvas from "../../components/canvas/canvas";
import UserState from "../../components/userState/userState";
import InGameCanvas from "../../components/inGameCanvas/inGameCanvas";

function InGame() {
  return (
    <Container className="center">
      <div className="flex flex-col items-stretch">
        <div className="flex items-center justify-center">
          <div className="w-full  self-start">
            <div className="flex flex-col justify-center p-10 bg-white rounded-lg shadow-md border border-gray-500">
              <div className="prod-title">
                <p className="text-2xl font-bold text-gray-900 uppercase text-center">
                  따라 그려요!
                </p>
              </div>
              <div className="prod-img">
                <img
                  src="https://pbs.twimg.com/profile_images/1463023431684079616/ghuPttFw_400x400.jpg"
                  className="object-cover object-center w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-center mt-12 mb-12">
          <UserState name="이름" state="Ready"></UserState>
        </div>
        <div>
          <div className="pt-10">
            <div>
              <button
                className=" w-full py-2 mb-6 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200 justify-center place-self-center"
                type="submit"
              >
                Ready
              </button>
            </div>
          </div>
        </div>
      </div>

      <InGameCanvas></InGameCanvas>

      <div className="flex flex-col">
        <div className="border border-gray-500 shadow-md rounded-lg mb-32">
          <div className=" relative bg-white rounded-lg">
            <div className="flex flex-col sm:flex-row sm:justify-around ">
              <div>
                <nav className="mt-10 px-6 ">
                  <a
                    className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors  duration-200  text-gray-800  rounded-lg"
                    href="#"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 512 512"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <rect width="512" height="512" fill="url(#pattern0)" />
                      <defs>
                        <pattern
                          id="pattern0"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        >
                          <use
                            xlinkHref="#image0_1110_3"
                            transform="scale(0.00195312)"
                          />
                        </pattern>
                        <image
                          id="image0_1110_3"
                          width="512"
                          height="512"
                          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAABXGlDQ1BJQ0MgUHJvZmlsZQAAKJFtkD9IQlEUxj/NUEpIQgjC4W1JmMTLaDajPxD1eBVUU8+rafLUy3svKmitoZZqiMaGlmhrciv3aAmiobmlLcKl7HauVmp14HB+9+O7h8MHuH0G56YHQL7gWPrEqLK4tKx4n+BHEAGE0Wcwm8c1bZos+J6tVbmHS867AbnrsOd55zza/5EzL49CnbObf/0t1ZFK24zmO3WUccsBXBFibcPhkreJgxYdRXwgOVPnM8nJOpdqnnk9QXxDHGBZI0X8SBxJNumZJs6b6+zrBnm9P11YmKPZTR3COFTEMIhhKJjEGHTK539/rOZPoAiOLVhYQwZZOPQvTgqHiTTxFApgiCJCrNJeFarM+Xd+DS23D4w8AO7dhsb2gNIF0OVraOEyvSmj8ik3LOMnVVfFY68OqXX29wLt10K8CMC7AlRvhXg7EaJ6DLS9Alczn2p9YlQ5zueHAAAAOGVYSWZNTQAqAAAACAABh2kABAAAAAEAAAAaAAAAAAACoAIABAAAAAEAAAIAoAMABAAAAAEAAAIAAAAAACgwl78AADCQSURBVHgB7d1rrH7ZXRfw/1SpWqttZ2gtKNN22tJa5OKFlDQjRISE8EZjoCgmYGIEFA2GeGnhBYyW0gt0OrQYa/QFCH0B+kZfmFhTERvbYTozLTVQOrWUCr0AnV7MtAHm4m/NzDP/c/Z5bnvvtfdel8+TrJzzPGdf1vqs9Zzv2us553luuOZGgAABAgTKFbg5qvaiKOlrKs+N8swoN14oT4rv/3iUJ0dJt9+P8kCUh6Pcf6H8Tnz/4Sgfebz82uNf40t/txv6a7IWEyBAgECBAinEXxzlpY+Xr4ivL4nytChL3j4bB/+VKO+Ncufj5f3xNU0emr6ZADTdvRpHgACBogVS4H9jlG+I8nVRlg77OMVZt8/EVv8jyn+L8rYoaULgRoAAAQIECEwUSFf5t0Z5Q5Rfj/JIJeXDUc/bo/zlKKkNbgQIECBAgMAZAl8e26TQ/1iUWkL/UD1TG1Jb0ksUbgQIECBAgMBA4Clx/7uj3BXlUJjW/vjd0ba/HyX9AaIbAQIECBDoWuA50frXRbk/Su0Bf279PxVtfX2U50ZxI0CAAAECXQk8N1r7lijpX/DODc7Wtnso2v5zUV4UxY0AAQIECDQt8Lxo3U9F+YMorQX61PY8GBY/HSXZuBEgQIAAgaYEnhqt+eEon48yNShb3y+thqRVkS+M4kaAAAECBKoWuCFq/11R0rvqtR7gudr3u2H1PVH8C2EguBEgQIBAfQJfGlV+e5RcwdjbcdJ/DfzF+rpdjQkQIECgV4EviIbfFqXnP/DLNVlJhq+KkkzdCBAgQIBAsQK3RM3eESVXADrOY5a/HKbeTKjYYa9iBAgQ6FsgvZFP+lQ9ob2MwefCNr2RkBsBAgQIEChC4I9GLf5tFMG/jsHPhrV3Eyxi6KsEAQIE+hV4QTQ9LU8L/3UN3hfm6Y8s3QgQIECAwOoCL4sz/nYU4b+NQXr75L+yeq87IQECBAh0LfDyaL039dkm+C9OuH4v+uE7ux6JGk+AAAECqwm8Is70cJSLQeT77TxSX/zgar3vRAQIECDQpcA/j1YL+zINXht9k9550Y0AAQIECGQTSMHyxijCv2yDn4w+8hbC2Ya9AxEgQKBvgRT+b4oi/OswSJMANwIECBAgMEtA+NcR+sPJ2e2zen3Pzn9oz2MeIkCAAIE2BVL4vznK97bZvKZb9TXRuj+I8j+bbqXGESBAgEB2AVf+dV75X1wJSP8d8B3ZR4YDEiBAgECzAsK//vDfTQTSpwl+fbMjVcMIECBAIJtACv/0R2S7APG1fotPRn++MNsIcSACBAgQaE7AlX/9YX9owpY+O8AHCDX3lNUgAgQIzBcQ/u2G/25S8NY5wyQNEDcCBAgQaEsg/W5Pf+3/Dxpq1oPRlvdG+bUoH4zygSgfivI7UT73ePl0fE23p0d5yuPlmfH1lihpyTyV9Il7XxnlC6K0cPueaMRbWmiINhAgQIDAPIEU/i285p/+5e0XovyLKN8QJedydzrWX41yW5RfiJLOtbuqru3rA1H3F0VxI0CAAIGOBVL41/4Of++ONnxflGev2I/PiHOlf697W5SHotQ2Cbg76tzKikY0xY0AAQIExgjUfOWflu5fE+U5Yxq80LY3x3F/JMqnotQ0EUirGW4ECBAg0JlArVf+H49++uEo6Qq8tNtTo0JpJeIjUWqYCPxe1PMlUdwIECBAoBOBGq/8Pxt980+iPLmCPkp1/P4on4lS+kTgF6OOaTy4ESBAgEDjArWF/8PRHz8d5Ysq7Jf0Nwk/FSW1oeSJwN+t0FaVCRAgQGCEQG3h/3+ibbeOaF+pm74sKpb+DbHUScAnom5/slQ89SJAgACBeQIp/Gv6a///GPUt8XX+qb3wJ2LHn4lS6iTg1VMbZj8CBAgQKFegpvD/fDCmP6Rr9Zb+dfD/RSltIpDcn9MqunYRIECgR4Galv3TX/j/hQ466auijR+LUtok4N91YK+JBAgQ6EKgpiv/D0WPfGkXvfJYI58bX9JbFJc0CUgfG/y8KG4ECBAgULFATeGfPqXuT1dsPbXqN8WO/ytKSZMAnxEwtTftR4AAgQIEalr2f2d4Pa0As62qkP448K4opUwC0psD9TgZ26r/nZcAAQLZBGq68k/v4d/SX/pP7cQvjB3fH6WUSUB6W2M3AgQIEKhIQPhX1FmDqj4v7n80SgmTgE9GPdJHI7sRIECAQAUCtS37e+OZq4Pqz8dD6aN6S5gEeHfAq/3jEQIECBQn4Mq/uC6ZXKG/F3uWMAFIf5zoRoAAAQIFCwj/gjtnYtV+NvYrYRLwZyfW324ECBAgsLCA8F8YeKPDp48VLuE9An50o/Y7LQECBAgcEUjh/+YoJVwpnqpD+lc/r/kf6cw9P/raeGzrTxH8jahDGmduBAgQIFCIgCv/Qjpi4Wq8NY5/anK19M+/euE2OjwBAgQInCkg/M+EamCzZ0cbPhNl6ZA/dnwvAzQwkDSBAIH6BVL417Ts3/M7/OUaba+IAx0L6KV/lv4WwY0AAQIENhRw5b8h/oan/iNx7q3fIOh5G7bfqQkQINC1gPDvuvuvvTKav/SV/rHjp/cmcCNAgACBlQWE/8rgBZ4u/QfFp6McC+klf/ZzBZqoEgECBJoWSOHvNf+mu/jsxr0+tlwy5I8d+xNn19KGBAgQIDBbIIX/T0Q59ou5lJ/5VL/Z3X3yAM+PLbZ8X4BbTtbQBgQIECAwW0D4zyZs8gB3Rqu2mvT97SZFNYoAAQIFCVj2L6gzCqvKP476bDUBuKMwC9UhQIBAUwKu/JvqzuyN+aI44oNRtpgEvD17axyQAAECBB4VcOVvIJwjkD5XYYsJgD8EPKd3bEOAAIGRAq78R4J1vPlro+1bTADSOZ/ZsbumEyBAILuAK//spE0f8JujdVtNAG5tWlbjCBAgsKKAK/8VsRs5Vfp8ha3+DuDbGzHUDAIECGwq4Mp/U/6qT/7LUfstVgFe+aSq2VSeAAEC2wuk8H9TlO/dviona/Cu2OKboqSPpXUrQ+ADG1XjZhOAjeSdlgCBJgRS+Kf/qa4h/O+OeqbXnIV/IBR0++BGdXmWCcBG8k5LgED1Arvw/0cVtCSF/zdG+VQFde2tivdt1OAbNzqv0xIgQKBqAa/5V919RVX+66I2W/wNQPrbAzcCBAgQGCEg/Edg2fSkwFfEFltMAH7jZM1sQIAAAQJPCKTw96l+T3D4JoNA+mS+LSYAH89Qd4cgQIBAFwLCv4tuXr2Rz4ozbjEBuH/1ljohAQIEKhRI4Z/+1W+LX9Rjz5n+1S+9wYxbHQJ/LKo5to9zbP+A/wKoY4CoJQEC2wmk8E//6vcPt6vCqDOn8E+h4laHQBpfW9zSJMKNAAECBA4I1LTsf/Gq8FejPc8+0CYPlyXwp6I6F/ture+9BFDWOFAbAgQKEqg1/HcBYhJQ0GA6UpXnx892fbbm148dqZMfESBAoFuBFP61vOZ/LDTeF+3wsa9lD+OvjOod68OlfvbhslnUjgABAusLtBL+u+AwCVh/DI0549fHxru+WvPre/wR4Jhusi0BAq0LpPCv6Q/+zumPPxcb/WIUfxNwjtb627xg/VM+esbfNQHYSN5pCRAoTmAX/jW8t/9YvBfHDv89iknAWLnlt3/h8qfYe4b7TQD2uniQAIHOBFL4p3f4azH8d12ZJgFvi+JvAnYiZXzdagXgt00AyhgAakGAwHYCu/Cv5f/850illwPeHsUkYI5i3n3TxGyL20e2OKlzEiBAoBSBXfiv+cdXJZzLvwiWMQLTR/I+FGWLMfFtZRCoBQECBNYXSOHfwr/6TQ0P/x2w/pgbnvGvxwNT+2/ufl8zrIz7BAgQ6EGg1yv/YWhYCdh2tL8hTj/sk7Xup9UHNwIECHQl0PuV/zBgrARsN/zvjlMP+2ON+7+1XZOdmQABAtsIuPLfHzhWAtYfjzfHKR+OskbgD8/xX1Nz/RdAUnAjQKAHgV34t/yvflP70b8ITpWbvt/fil3TmNzillZ93AgQINCFwC78h1dC7l++ArUSsN7T4b1xqq3G37es10xnIkCAwHYCKfx7/mv/sSHjbwKWH6sviVOM7Zec23/J8k10BgIECGwrIPynBY1JwLLj9ifj8DkDfcyxfnPZpjk6AQIEthew7D8vZLwcsMwYflYc9nNRxoR2zm3//TLNclQCBAiUISD88wSMSUD+8fyqOGTOQB97rO/I3yRHJECAQBkClv3zBoyXA/KN66fGoT4ZZWxo59z+i/M1x5EIECBQjkBN4f+uYHtdlJy/3Jc6lklAnjG+9dV/+s8DNwIECDQnUNOy/7tD/xmP98Bt8XWp4M55XC8HzHvKPD92//zGff1D85pgbwIECJQnUGv47yRNAnYS7X79T9G0nBOyKcf68nZ5tYwAgR4Fagr/tOz/tAOd9C/j8Sm/1Nfex8sBBzrwyMPfXEDffuBI/fyIAAEC1QnUFP4Xl/0PQVsJOCRT7+PPjKp/NMraE7Xh+X6oXkI1J0CAwGWB1sJ/1zqTgJ1E/V/TGC1h6T996NAt9XNqAQECBB77EJWfCIjhVU6J98+58h/2qUnAUKTO+/+0kDH69jr51JoAAQKXBWq68j/2mv/lVl29528CrprU9MjXRmV/P0oJk9JvrwlOXQkQILBPoKbwn3LlP2yzlYChSB33vyyqeX+UEsL/t6IeT66DTS0JECCwXyCF/x1RSvileqoOOcJ/p2ASsJOo4+ufiWp+JMqpMbLWz3+gDja1JECAwH6Bmq785yz772/9tWteDjgkU9bjN0V1fiXKWuF+6jwPRF3SfyG4ESBAoEqBmq787w7hGxdSthKwEGymw6Z3drwryqlQXvPnP56pbQ5DgACB1QWE/2Vyk4DLHqXcKzH809sOf3EpQOpBgACBMQIp/Gv5V787o66H3uFvTJvP2dbLAecorbdNWva/N8qaV/bnnCv9vYwbAQIEqhNw5X+8y6wEHPdZ66clXvmnycFnozx7LQTnIUCAQC4B4X+epEnAeU5LbVVq+KcJwCuWarTjEiBAYCkB4T9O1iRgnFeurUsO//8bjXxKroY6DgECBNYQSOHvNf/x0v4mYLzZnD1Kfc1/93cB3zqncfYlQIDA2gKu/OeJWwmY53fu3k+PDUv7V79d8Kev/+XchtiOAAECJQgI/zy9YBKQx/HQUUoP/89FxX3i36He8zgBAsUJpPC37J+vW7wckM/y4pFKX/ZPV//ff7HCvidAgEDJAjWFf/oF+9KSMS/UzSTgAkaGb2sI//Rxv0/K0FaHIECAwOICNS37715j/XiopE95q+Hm5YA8vVT6sn8am5+OcnOe5joKAQIElhWo7cp/NwFIXz8a5cXL8mQ7upWAeZQ1XPmnMfnyec20NwECBNYRqPHK/+IEIH1vJSD/297+ariW9M51NVz5p7F4+zpPW2chQIDAPIEWwn83GTAJaHcSUEv4vzOejk+e95S0NwECBJYXaCn8d5MALwfknwS8L4bilp9fX8uy/2+Gk0/6W/73ljMQIDBToMXw300CrATknwRs9XJALVf+D8Tz8atnPiftToAAgcUFWg5/k4D84b8zXXsSUEv4PxTP2L+2+LPWCQgQIDBToIfw3wWWlwPyTwbWejkgLfvfE2XXl6V+fTjq+F0zn5N2J0CAwOICPYX/LjC8HJA/RJdeCajlyj+NsX+2+LPWCQgQIDBToMfwNwnIH/4706UmATWF/20zn5N2J0CAwOICPYf/LrCsBOSfDOSeBNQU/j+2+LPWCQgQIDBTQPhfDz6TgOsWu4nR3K+5JgHCf+YT3e4ECBC4KCD8rwaeScBVk60nAcL/4rPW9wQIEJgpIPwPB51JwGGbqZOBqSsBwn/mE93uBAgQuCgg/E8HnEnAaaOxk4GxkwDhf/FZ63sCBAjMFBD+5webScD5VudOBs6dBAj/mU90uxMgQOCigPAfH2gmAePNTk0GTk0ChP/FZ63vCRAgMFNA+E8PMpOA6XaHJgOHJgHCf+YT3e4ECBC4KCD85weYScB8w+FkYDgJEP4Xn7W+J0CAwEwB4Z8vuEwC8lnuJgO7SYDwn/lEtzsBAgQuCtQU/vdFxdOnpu2CodSvPkAofx+lDxCq4YN90ph8bRQ3AgQIFC1QU/jfHZI3RvmbUR6MUmr47+plJaD8Ptr1Vc6v3t43npxuBAiULVBj+O9ETQJ2Evm+3haHyhmEPR5L+Ocbj45EgMBCAjWH/47EJGAnke+rScD0SZDwzzcOHYkAgYUEWgj/HY1JwE4i31eTgPGTAOGfb/w5EgECCwm0FP47IpOAnUS+ryYB508ChH++cedIBAgsJNBi+O+oTAJ2Evm+mgScngQI/3zjzZEIEFhIoOXw35GZBOwk8n01CTg8CRD++caZIxEgsJBAD+G/ozMJ2Enk+2oScHUSIPzzjS9HIkBgIYGewn9HaBKwk8j31STg+iRA+OcbV45EgMBCAj2G/47SJGAnke+rScC1a8I/33hyJAIEFhLoOfx3pCYBO4l8X3ueBAj/fOPIkQgQWEhA+F+HrWUS8Imo8pddr3bR3/U4CRD+RQ9JlSNAIAkI/6vjwCTgqsncR3qaBAj/uaPF/gQILC6Qwv+NUWp4D/bdB/ssjvL4CUwC8kv3MAkQ/vnHjSMSIJBZQPifBjUJOG00douWJwHCf+xosD0BAqsLCP/zyU0Czrc6d8sWJwHC/9zetx0BApsJCP/x9CYB481O7dHSJED4n+ptPydAYHMB4T+9C0wCptsd2rOFSYDwP9S7HidAoBgB4T+/K0wC5hsOj1DzJED4D3vTfQIEihMQ/vm6xCQgn+XuSDVOAoT/rvd8JUCgWIGawv+XQvHpxUper9jfiW8filL6v09+NOr44ig13F4flSzdc1e/19UAqo4ECPQtUFP4r/1//nNHhpWAuYLX90+Tvrui7AK25K+u/K/3m+8IEChUQPgv3zEmAfONhf98Q0cgQIDAEwLC/wmKxb8xCZhOLPyn29mTAAECVwSE/xWSxR8wCRhPXFP4//j45tmDAAEC6woI/3W9L57NJOCixvHvhf9xHz8lQIDAKAHhP4prkY1NAk6zCv/TRrYgQIDA2QLC/2yqxTc0CThMLPwP2/gJAQIERgsI/9Fki+9gEnCVWPhfNfEIAQIEJgsI/8l0i+9oEnCdWPhft/AdAQIEZgsI/9mEix/AJOCxd3as5U1+/LX/4k8JJyBAYK6A8J8ruN7+PU8CXPmvN86ciQCBDgSEf32d3OMkIIV/+myHkt/Wd1c3V/71PafUmEB3AsK/3i7vaRIg/Osdp2pOgECBAsK/wE4ZWaUeJgHCf+SgsDkBAgROCbwmNtgtWZb8tbZP9TvlnvvnLU8ChH/u0eJ4BAh0LyD82xoCLU4ChH9bY1RrCBAoQED4F9AJC1ShpUmA8F9ggDgkAQJ9Cwj/tvu/hUmA8G97jGodAQIbCAj/DdA3OGXNkwDhv8GAcUoCBNoWEP5t9++wdTVOAoT/sBfdJ0CAwAyB9K9+t0cp+a/8d3VLb/KSQsAtj8B3xmEeirLzLfXrx6KOL4uS/tuj1DperNfrop5uBAgQKF6gliv/e0LyxuI166tgLSsBFwO25O+9w199zwE1JtClgPDvstuvNNokIM/KgvC/MrQ8QIBAiQLCv8Re2a5OJgHzJgHCf7ux68wECIwQEP4jsDra1CRg2iRA+Hf0JNFUAjULCP+ae2/5upsEjJsECP/lx6QzECCQQUD4Z0Ds4BAmAedNAoR/B08GTSTQgoDwb6EX12uDScDxSYDwX28sOhMBAjMEhP8MvI53NQnYPwkQ/h0/KTSdQE0Cwr+m3iqvriYBlycBwr+8MapGBAjsERD+e1A8NFrAJOCxSYDwHz107ECAwBYCwn8L9XbP2fskQPi3O7a1jEBTAsK/qe4spjG9TgKEfzFDUEUIEDgmIPyP6fjZXIHeJgHCf+6IsT8BAqsICP9VmLs/SS+TAOHf/VAHQKAOAeFfRz+1UsvWJwHCv5WRqh0EGhcQ/o13cKHNa3USIPwLHXCqRYDAZQHhf9nDvXUFWpsECP91x4+zESAwUUD4T4SzW1aBViYBwj/rsHAwAgSWEhD+S8k67hSB2icBwn9Kr9uHAIHVBX40zvhIBeWeqOONq+s44VYCtU4ChP9WI8Z5CRAYJSD8R3HZeGWB2iYBwn/lAeJ0BAhME3hD7FbDlf9dUc9nTGuivSoXSP3+wSg1jNPXV26t+gQIdCLgyr+Tjq64mU+Puv9SlBrC35V/xQNN1Qn0JCD8e+rtOtsq/OvsN7UmQKBgAeFfcOeo2qMCwt9AIECAQGYB4Z8Z1OGyCwj/7KQOSIBA7wLCv/cRUH77hX/5faSGBAhUJiD8K+uwDqsr/DvsdE0mQGBZAeG/rK+jzxcQ/vMNHYEAAQKXBIT/JQ53ChSoKfzT+2a4ESBAoHgB4V98F3VfQeHf/RAAQIBAbgHhn1vU8XILCP/coo5HgED3AsK/+yFQPIDwL76LVJAAgdoEhH9tPdZffYV/f32uxQQILCwg/BcGdvjZAsJ/NqEDECBA4LKA8L/s4V55AsK/vD5RIwIEKhcQ/pV3YAfVF/4ddLImEiCwroDwX9fb2cYLCP/xZvYgQIDAUQHhf5THDwsQEP4FdIIqECDQloDwb6s/W2yN8G+xV7WJAIFNBYT/pvxOfoaA8D8DySYECBAYIyD8x2jZdgsB4b+FunMSINC0gPBvunubaJzwb6IbNYIAgZIEhH9JvaEu+wSE/z4VjxEgQGCGgPCfgWfXVQSE/yrMTkKAQE8Cwr+n3q6zrcK/zn5TawIEChYQ/gV3jqo9KiD8DQQCBAhkFhD+mUEdLruA8M9O6oAECPQuIPx7HwHlt1/4l99HakiAQGUCwr+yDuuwusK/w07XZAIElhUQ/sv6Ovp8AeE/39ARCBAgcElA+F/icKdAAeFfYKeoEgECdQsI/7r7r4faC/8eelkbCRBYVUD4r8rtZBMEhP8ENLsQIEDgmIDwP6bjZyUICP8SekEdCBBoSqCm8L+pKXmNOVdA+J8rZTsCBAicKSD8z4Sy2WYCwn8zeicmQKBVAeHfas+20y7h305fagkBAoUICP9COkI1DgoI/4M0fkCAAIFpAsJ/mpu91hMQ/utZOxMBAp0ICP9OOrriZgr/ijtP1QkQKFNA+JfZL2p1XUD4X7fwHQECBLIICP8sjA6yoIDwXxDXoQkQ6FNA+PfZ7zW1OoX/nVEeqaC8oSZYdSVAoF8B4d9v39fScuFfS0+pJwEC1QgI/2q6qtuKCv9uu17DCRBYSuDVceAallPviXp6e9+lRkHZxxX+ZfeP2hEgUKGA8K+w0zqrsvDvrMM1lwCB5QWE//LGzjBPQPjP87M3AQIErggI/yskHihMQPgX1iGqQ4BA/QLCv/4+bL0Fwr/1HtY+AgRWFxD+q5M74UgB4T8SzOYECBA4JSD8Twn5+dYCwn/rHnB+AgSaExD+zXVpcw0S/s11qQYRILC1gPDfugec/5SA8D8l5OcECBAYKSD8R4LZfHUB4b86uRMSINC6gPBvvYfrb5/wr78PtYAAgcIEhH9hHaI6VwRqCv/br9TeAwQIEChQQPgX2CmqdElA+F/icIcAAQLzBYT/fENHWFZA+C/r6+gECHQoIPw77PTKmiz8K+sw1SVAoHwB4V9+H/VeQ+Hf+wjQfgIEsgvUEv73Rstvyt56B6xBQPjX0EvqSIBAVQLCv6ru6rKywr/LbtdoAgSWFBD+S+o6dg4B4Z9D0TEIECBwQUD4X8DwbZECwr/IblEpAgRqFhD+NfdeH3UX/n30s1YSILCigPBfEdupJgkI/0lsdiJAgMBhAeF/2MZPyhAQ/mX0g1oQINCQgPBvqDMbbYrwb7RjNYsAge0EhP929s58nsDTYrM7ozxSQfHBPuf1qa0IENhYQPhv3AFOf1JA+J8ksgEBAgTGCQj/cV62Xl9A+K9v7owECDQuIPwb7+AGmif8G+hETSBAoCwB4V9Wf6jNVQHhf9XEIwQIEJglIPxn8dl5BQHhvwKyUxAg0JeA8O+rv2tsrfCvsdfUmQCBogWEf9Hdo3IhIPwNAwIECGQWEP6ZQR0uu4Dwz07qgAQI9C4g/HsfAeW3X/iX30dqSIBAZQLCv7IO67C6wr/DTtdkAgSWFRD+y/o6+nwB4T/f0BEIECBwSUD4X+Jwp0AB4V9gp6gSAQJ1Cwj/uvuvh9oL/x56WRsJEFhVQPivyu1kEwSE/wQ0uxAgQOCYgPA/puNnJQgI/xJ6QR0IEGhKQPg31Z1NNkb4N9mtGkWAwJYCwn9Lfec+R0D4n6NkGwIECIwQEP4jsGy6iYDw34TdSQkQaFlA+Lfcu220Tfi30Y9aQYBAQQLCv6DOUJW9AsJ/L4sHCRAgMF1A+E+3s+c6AsJ/HWdnIUCgIwHh31FnV9pU4V9px6k2AQLlCvxIVO2RCsq9UcebymVUswUFhP+CuA5NgECfAsK/z36vqdXCv6beUlcCBKoQEP5VdFPXlRT+XXe/xhMgsISA8F9C1TFzCgj/nJqORYAAgRAQ/oZB6QLCv/QeUj8CBKoTEP7VdVl3FRb+3XW5BhMgsLSA8F9a2PHnCgj/uYL2J0CAwEBA+A9A3C1OQPgX1yUqRIBA7QLCv/YebL/+wr/9PtZCAgRWFhD+K4M73WgB4T+azA4ECBA4LiD8j/v46fYCwn/7PlADAgQaExD+jXVog80R/g12qiYRILCtgPDf1t/ZTwvUFv43nG6SLQgQILCtgPDf1t/ZTwsI/9NGtiBAgMAoAeE/isvGGwgI/w3QnZIAgbYFhH/b/dtC64R/C72oDQQIFCUg/IvqDpXZIyD896B4iAABAnMEhP8cPfuuISD811B2DgIEuhIQ/l11d5WNFf5VdptKEyBQsoDwL7l31C0JCH/jgAABApkFhH9mUIfLLiD8s5M6IAECvQsI/95HQPntF/7l95EaEiBQmYDwr6zDOqyu8O+w0zWZAIFlBYT/sr6OPl9A+M83dAQCBAhcEhD+lzjcKVBA+BfYKapEgEDdAsK/7v7rofbCv4de1kYCBFYVEP6rcjvZBAHhPwHNLgQIEDgmIPyP6fhZCQLCv4ReUAcCBJoSEP5NdWeTjRH+TXarRhEgsKWA8N9S37nPERD+5yjZhgABAiMEhP8ILJtuIiD8N2F3UgIEWhYQ/i33bhttE/5t9KNWECBQkIDwL6gzVGWvgPDfy+JBAgQITBcQ/tPt7LmOgPBfx9lZCBDoSED4d9TZlTY1hf+7ojxSQXlj1PGGKG4ECBAoWkD4F909KhcCwt8wIECAQGYB4Z8Z1OGyCwj/7KQOSIBA7wLCv/cRUH77awr/fx2clv3LH1NqSKB7AeHf/RAoHkD4F99FKkiAQG0Cwr+2HuuvvsK/vz7XYgIEFhYQ/gsDO/xsAeE/m9ABCBAgcFlA+F/2cK88AeFfXp+oEQEClQsI/8o7sIPqC/8OOlkTCRBYV0D4r+vtbOMFhP94M3sQIEDgqIDwP8rjhwUICP8COkEVCBBoS0D4t9WfLbZG+LfYq9pEgMCmAsJ/U34nP0NA+J+BZBMCBAiMERD+Y7Rsu4WA8N9C3TkJEGha4FXRuho+Le3eqOdNTfeExh0SEP6HZDxOgACBiQLCfyKc3VYTEP6rUTsRAQK9CAj/Xnq63nYK/3r7Ts0JEChUQPgX2jGq9YSA8H+CwjcECBDIIyD88zg6ynICwn85W0cmQKBTAeHfacdX1GzhX1FnqSoBAnUICP86+qnnWgr/nntf2wkQWERA+C/C6qAZBYR/RkyHIkCAQBIQ/sZB6QLCv/QeUj8CBKoTEP7VdVl3FRb+3XW5BhMgsLTAa+IENbzD3z1RT+/wt/RoKPP4T49q3RmlhnF6R9TzhjIZ1YoAAQLXBW6Jb2v4pXpv1FP4X++3nr5z5d9Tb2srAQKrCfxAnKn0CYDwX204FHci4V9cl6gQAQKtCKRwLXkCIPxbGWnj2yH8x5vZgwABAmcJlL78L/zP6sYmNxL+TXarRhEgUIpAycv/wr+UUbJ+PYT/+ubOSIBAZwIpZEtc/hf+nQ3EC80V/hcwfEuAAIElBEpd/hf+S/R2HccU/nX0k1oSIFC5QInL/8K/8kE1o/rCfwaeXQkQIDBGIIVtacv/JgBjerCdbYV/O32pJQQIFC5Q6vJ/mpCYBBQ+eDJXT/hnBnU4AgQIHBMocfn/4mqEScCx3mvnZ8K/nb7UEgIEKhFIAXsxcEv83iSgksE0sZrCfyKc3QgQIDBVoOTl/+FExCRgai+XvZ/wL7t/1I4AgUYFSl/+NwlodOA93izh33b/ah0BAgULpKvqYciWft9KQMEDakTVhP8ILJsSIEAgp0BNy//DSYlJQM6RsP6xhP/65s5IgACBJwRqW/43CXii66r+RvhX3X0qT4BACwLpKnoYqrXdtxJQ10gU/nX1l9oSINCgQM3L/8NJiklAHQNU+NfRT2pJgEDjArUv/5sE1DVAhX9d/aW2BAg0LJCumochWvt9KwFlDljhX2a/qBUBAh0KtLT8P5y0mASUNaCFf1n9oTYECHQu0Nryv0lAmQNa+JfZL2pFgEDHAukqeRiard23ErDtAK8p/N8SVDdsy+XsBAgQWF6g5eX/4STGJGD58bTvDMJ/n4rHCBAgsLFA68v/JgHbDjDhv62/sxMgQOCgQLoqHoZk6/etBBwcDll/IPyzcjoYAQIE8gk8Pw7Vetgfap9JQL5xtO9Iwn+fiscIECBQiEBvy//DyYBJwDIDUfgv4+qoBAgQyCaQAnAYir3dNwnINpwePZDwz+vpaAQIEMgu0PPy/3CSYxKQZ3gJ/zyOjkKAAIFFBXpf/jcJyDu8hH9eT0cjQIDAYgLpqncYgr3ftxIwbbgJ/2lu9iJAgMDqApb/D09+TALGDUfhP87L1gQIENhUwPL/4QlAWgUxCThveAr/85xsRYAAgWIE7omabLXc//kNzz2mzXdHPW8spsfKq0hN4f+m4PPe/uWNITUiQGBlga2X/9Pqw6ujjAnjrba1ErB/cNYU/j7YZ38fepQAgQ4Ftl7+f9Hj5iYBdQ4+4V9nv6k1AQIEHn19e8sr6otdYBJwUaP874V/+X2khgQIENgrUMLy/7BiJgFDkTLvC/8y+0WtCBAgcJZAKcv/w8qaBAxFyrov/MvqD7UhQIDAaIF7Y49Slv+HlTcJGIqUcV/4l9EPakGAAIHJAiUu/w8bYxIwFNn2vvDf1t/ZCRAgkEWg1OX/YeNMAoYi29wX/tu4OysBAgSyC5S8/D9srEnAUGTd+8J/XW9nI0CAwGICNSz/DxtvEjAUWee+8F/H2VkIECCwikAty/9DDJOAociy94X/sr6OToAAgdUFalr+H+KYBAxFlrkv/JdxdVQCBAhsJlDj8v8QyyRgKJL3vvDP6+loBAgQKEKg1uX/IZ5JwFAkz33hn8fRUQgQIFCcQM3L/0NMk4ChyLz7wn+en70JECBQrEALy/9DXJOAoci0+8J/mpu9CBAgUIVAK8v/Q2yTgKHIuPvCf5yXrQkQIFCdQEvL/0N8k4ChyHn3hf95TrYiQIBAtQItLv8PO8MkYChy/L7wP+7jpwQIEGhCoNXl/2HnmAQMRfbfF/77XTxKgACB5gRaXv4fdpZJwFDk8n3hf9nDPQIECDQr0MPy/7DzTAKGIo/dF/77XTxKgACBJgV6Wf4fdp5JwGWRFP7vjPJIBeUtUccborgRIECAwAyBnpb/h0wmAY+JCP/hyHCfAAECjQv0uPw/7NLeJwHCfzgi3CdAgEAHAr0u/w+7ttdJgPAfjgT3CRAg0IlAz8v/wy7ubRIg/IcjwH0CBAh0ImD5/2pH9zIJEP5X+94jBAgQ6EbA8v/+rm59EiD89/e7RwkQINCNgOX/w13d6iRA+B/ucz8hQIBAFwKW/093c2uTAOF/us9tQYAAgeYFLP+f18WtTAKE/3n9bSsCBAg0L2D5//wurn0SIPzP72tbEiBAoGkBy//ju7fWSYDwH9/X9iBAgECzApb/p3VtbZOAmsL/30SXeG//aePSXgQIEDhb4J7YcqsPfEkvPdR8+7Go/FZ2Y857d9TzXZXU9c1RT+EfCG4ECBBYUsDy/3zdWlYCxkwYttrWlf/88egIBAgQOEvA8v9ZTCc3MgmYvxIi/E8OMxsQIEAgn0Bagt/qai+99NDSzSRg+lgS/i09E7SFAIHiBbZe/n9l8ULjK2gSMH4SIPzHjzN7ECBAYJaA5f9ZfAd3Ngk4fxIg/A8OIz8gQIDAcgKW/5ezNQk4PQkQ/suNP0cmQIDAQQHL/wdpsv3AJODwJED4ZxtmDkSAAIFxAlsv/79wXHWr3dok4OokQPhXO5xVnACBFgQs/6/XiyYB1ycBwn+9cedMBAgQuCJg+f8KyeIPmARcuyb8Fx9mTkCAAIHjApb/j/ss9dOeJwHCf6lR5bgECBAYIWD5fwRW5k17nAQI/8yDyOEIECAwRcDy/xS1vPv0NAkQ/nnHjqMRIEBgsoDl/8l0WXfsYRIg/LMOGQcjQKBlgSet0LhvWeEch07xnvjBfYd+2NHjN0dbPxnlgYbb/K+ibd8dJX3OhBsBAgQIbCxg+X+7DviSOPX3RXlHlIejbPUBTGuc15V/dLAbAQIEShKw/L9ub/QU+ruJhfBfd4w5GwECBM4S8Nf/ZzHN2qjH0Bf+s4aMnQkQILCsgOX/5Xx7Dn3hv9y4cmQCBAhkEbD8n4XxiYMI/et/x2DZ/4lh4RsCBAiUJ2D5f36fCP3roe/Kf/54cgQCBAgsLmD5fzqx0L8a+sJ/+niyJwECBFYVsPw/jlvoHw594T9uLNmaAAECmwpY/j/NL/RPh77wPz2ObEGAAIFiBCz/H+4KoX9+6Av/w+PITwgQIFCkgOX/y90i9MeHvvC/PIbcI0CAQBUClv+vXRP600Nf+FfxNFdJAgQIXBboeflf6M8PfeF/+fnkHgECBKoR6G35X+jnC33hX83TXEUJECBwVaCH5X+hnz/0hf/V55JHCBAgUI1Ay8v/Qn+50Bf+1TzFVZQAAQL7BVpb/hf6y4e+8N//XPIoAQIEqhJoYflf6K8X+sK/qqe3yhIgQGC/QM3L/0J//dAX/vufRx4lQIDAagJ/ONOZvi3TcaYe5j+M3DGF/t+I8q1RXhblhihu6wj8epzmP0f5+SjvWOeUzkKAAAECSwnUsPzvSn+7K/0PxcC7I8qtSw1AxyVAgACBcQI5VgDS8v9XjTtt1q3TleShmyv9QzLLP+5Kf3ljZyBAgMBkgRwTgNKW/4X+5OEwe0ehP5vQAQgQIFCPQAnL/5b3Le/X84xRUwIECBQgMPeP314Qbbhvw3a8O879YJSXRpnblg2bUd2p3x81Ti+9pPK+6mqvwgQIECBwbe5LAC/f2PAvbXz+nk5veb+n3tZWAgSaF5g7AUj/RufWroDQb7dvtYwAgc4F5iybp7/+/2Dnfi02X+i32KvaRIAAgYHAnBWArf/6f9AUd2cICP0ZeHYlQIBAjQJzJgCW/2vs8et1FvrXLXxHgACB7gSmvgRg+b/OoSL06+w3tSZAgEB2gakrAJb/s3fFYgcU+ovROjABAgTqFZg6AbD8X3afC/2y+0ftCBAgsLnAlJcALP9v3m17KyD097J4kAABAgT2CUxZAbD8v09ym8eE/jbuzkqAAIHqBaZMACz/b9vtQn9bf2cnQIBAEwJjXwKw/L9Ntwv9bdydlQABAs0KjF0BsPy/3lAQ+utZOxMBAgS6Exg7AbD8v+wQEfrL+jo6AQIECEwQSMv/jyjZDT4UpndEuTWKGwECBAgQWEVgzAqA5f98XeJKP5+lIxEgQIDAwgL3xvGtAEw3cKW/8AB1eAIECBDIL/DCOKTwH28g9POPRUckQIAAgQwC574E4I//zse2vH++lS0JECBAoHABy//Hr/5d6Rc+gFWPAAECBMYLWP7fH/5Cf/xYsgcBAgQIFCJwzksALy+kriVUw/J+Cb2gDgQIECCwisB74iw9/wGgK/1VhpmTECBAgEBJAr0u/wv9kkahuhAgQIBAdoFTLwH0tPxveT/78HJAAgQIEKhVoPXlf1f6tY5M9SZAgACBxQRaXf4X+osNGQcmQIAAgVoEjr0E0NLyv+X9WkakehIgQIDA5gK1L/+70t98CKkAAQIECNQmUOvyv9CvbaSpLwECBAhsInDoJYCalv8t728ydJyUAAECBFoUKH3535V+i6NOmwgQIEBgU4FSl/+F/qbDwskJECBAoCWBfS8BlLT8b3m/pdGmLQQIECBQtMDWy/+u9IseHipHgAABAi0KbLX8L/RbHE3aRIAAAQLFCgxfAlhz+d/yfrHDQsUIECBAoDeBpZf/Xen3NqK0lwABAgSKF1hq+V/oF9/1KkiAAAECvQlcfAkg5/K/5f3eRpL2EiBAgEC1AnOX/13pV9v1Kk6AAAECvQpMXf4X+r2OGO0mQIAAgSYEfjBa8ciZReg30eUaQYAAAQIErl07tfwv9I0SAgQIECDQmMCh5X+h31hHaw4BAgQIELgocHH5X+hflPE9AQIECBBoVOCGaNdbo9wX5eej/O8obgQIECBAgEDjAv8f5ptW23OzhtMAAAAASUVORK5CYII="
                        />
                      </defs>
                    </svg>
                  </a>
                  <a
                    className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors  duration-200  text-gray-600  rounded-lg "
                    href="#"
                  >
                    <svg
                      fill="#000000"
                      height="20"
                      width="20"
                      version="1.1"
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 299.289 299.289"
                      xmlSpace="preserve"
                    >
                      <g>
                        <g>
                          <path
                            d="M290.422,79.244L220.034,8.857c-11.794-11.795-30.986-11.795-42.78,0C175.866,10.245,12.971,173.14,8.867,177.244
			c-11.822,11.821-11.824,30.957,0,42.78l70.388,70.388c11.821,11.822,30.957,11.824,42.78,0
			c1.046-1.046,165.357-165.357,168.388-168.388C302.244,110.203,302.246,91.066,290.422,79.244z M110.367,278.744
			c-5.374,5.373-14.071,5.373-19.446,0l-70.388-70.388c-5.373-5.374-5.375-14.071,0-19.446l34.61-34.61l89.834,89.834
			L110.367,278.744z M278.755,110.357l-122.111,122.11l-89.833-89.833l122.11-122.111c5.374-5.374,14.071-5.374,19.446,0
			l70.388,70.388C284.129,96.285,284.129,104.983,278.755,110.357z"
                          />
                        </g>
                      </g>
                    </svg>
                  </a>
                  <a
                    className="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors  duration-200  text-gray-600  rounded-lg "
                    href="#"
                  >
                    <svg
                      fill="#000000"
                      height="20"
                      width="20"
                      version="1.1"
                      id="Capa_1"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 325.04 325.04"
                      xmlSpace="preserve"
                    >
                      <g>
                        <path
                          d="M84.821,210.938c-4.646-3.671-10.469-5.693-16.396-5.693c-8.055,0-15.556,3.579-20.58,9.821
		c-4.393,5.464-6.382,12.3-5.598,19.247c0.785,6.962,4.258,13.198,9.778,17.561c4.646,3.672,10.467,5.694,16.393,5.694
		c8.061,0,15.563-3.586,20.583-9.834c4.389-5.455,6.376-12.283,5.595-19.227C93.813,221.545,90.342,215.305,84.821,210.938z
		 M79.648,240.215c-2.732,3.402-6.826,5.354-11.23,5.354c-3.283,0-6.379-1.075-8.951-3.108c-2.991-2.364-4.871-5.735-5.296-9.493
		c-0.422-3.743,0.652-7.431,3.023-10.379c2.733-3.396,6.827-5.344,11.231-5.344c3.286,0,6.383,1.075,8.954,3.107
		c2.99,2.364,4.869,5.737,5.292,9.497C83.092,233.589,82.02,237.269,79.648,240.215z"
                        />
                        <path
                          d="M190.33,149.484c3.958,0,7.785-0.867,11.384-2.582c6.362-3.044,11.141-8.369,13.454-14.995
		c2.301-6.584,1.887-13.669-1.163-19.944c-4.363-8.994-13.681-14.806-23.738-14.806c-3.966,0-7.801,0.87-11.399,2.587
		c-6.36,3.034-11.141,8.355-13.458,14.983c-2.305,6.589-1.892,13.675,1.163,19.953C170.95,143.673,180.275,149.484,190.33,149.484z
		 M176.736,118.688c1.254-3.585,3.846-6.467,7.298-8.114c1.972-0.94,4.068-1.417,6.232-1.417c5.491,0,10.571,3.157,12.943,8.048
		c1.645,3.384,1.868,7.199,0.63,10.745c-1.253,3.587-3.848,6.473-7.296,8.123c-1.965,0.937-4.056,1.411-6.214,1.411
		c-5.496,0-10.586-3.162-12.968-8.055C175.718,126.05,175.496,122.236,176.736,118.688z"
                        />
                        <path
                          d="M125.035,107.081c1.93,0.436,3.905,0.657,5.87,0.657c12.352,0,22.905-8.354,25.665-20.327
		c1.551-6.789,0.358-13.778-3.356-19.682c-3.745-5.95-9.598-10.086-16.476-11.644c-1.938-0.44-3.921-0.664-5.895-0.664
		c-12.344,0-22.886,8.363-25.637,20.334c-1.564,6.784-0.379,13.774,3.336,19.682C112.29,101.395,118.149,105.531,125.035,107.081z
		 M116.901,78.447c1.491-6.491,7.225-11.025,13.942-11.025c1.079,0,2.168,0.123,3.239,0.366c3.752,0.85,6.939,3.099,8.975,6.333
		c2.006,3.187,2.65,6.957,1.816,10.605c-1.471,6.381-7.346,11.012-13.969,11.012c-1.076,0-2.161-0.122-3.229-0.363
		c-3.753-0.845-6.94-3.092-8.975-6.326C116.698,85.864,116.059,82.1,116.901,78.447z"
                        />
                        <path
                          d="M77.356,122.05c5.514-4.369,8.981-10.61,9.765-17.573c0.781-6.942-1.202-13.77-5.593-19.235
		c-5.032-6.239-12.539-9.817-20.594-9.817c-5.921,0-11.738,2.016-16.385,5.681c-5.515,4.356-8.984,10.587-9.771,17.545
		c-0.786,6.951,1.202,13.791,5.601,19.265c5.028,6.246,12.536,9.829,20.6,9.829C66.905,127.744,72.722,125.722,77.356,122.05z
		 M49.731,110.393c-2.376-2.956-3.451-6.648-3.027-10.396c0.424-3.753,2.302-7.119,5.282-9.474c2.571-2.028,5.666-3.1,8.949-3.1
		c4.408,0,8.511,1.95,11.246,5.341c2.365,2.946,3.437,6.629,3.016,10.37c-0.423,3.764-2.303,7.142-5.292,9.51
		c-2.559,2.027-5.646,3.099-8.925,3.099C56.567,115.744,52.467,113.792,49.731,110.393z"
                        />
                        <path
                          d="M322.745,63.336c-1.037-1.046-2.887-2.293-5.806-2.293c-3.423,0-12.516,0-67.74,46.992c-1.11,0.944-2.23,1.901-3.354,2.865
		c-9.867-25.739-27.203-48.686-49.542-65.284c-25.614-19.031-56.114-29.096-88.2-29.104c-0.01,0-0.017,0-0.025,0
		c-21.654,0-47.976,7.566-68.697,19.749C13.981,51.193-0.005,71.163,0,92.49c0.008,25.748,14.53,36.518,26.199,45.171
		c9.515,7.057,17.03,12.63,17.034,24.844c0.003,12.213-7.508,17.781-17.018,24.831c-11.665,8.648-26.184,19.412-26.176,45.163
		c0.006,21.324,14.001,41.299,39.406,56.244c20.736,12.198,47.072,19.78,68.73,19.786c0.015,0,0.028,0,0.042,0
		c39.305,0,76.254-15.171,104.044-42.72c27.436-27.197,42.695-63.246,43.096-101.661c9.316-10.601,18.341-21.138,26.58-31.067
		c14.096-16.986,24.935-31.002,32.216-41.657C323.799,77.311,328.023,68.655,322.745,63.336z M203.814,257.287
		c-25.529,25.308-59.475,39.242-95.596,39.242c-0.011,0-0.027,0-0.038,0c-38.707-0.011-96.13-26.903-96.141-64.034
		c-0.006-19.707,10.354-27.388,21.323-35.52c10.253-7.602,21.874-16.218,21.87-34.474c-0.006-18.253-11.63-26.874-21.886-34.479
		C22.372,119.883,12.006,112.196,12,92.487c-0.005-22.801,20.963-38.533,33.463-45.882c18.698-10.993,43.273-18.094,62.615-18.094
		c0.007,0,0.015,0,0.021,0c29.491,0.008,57.517,9.254,81.048,26.736c21.702,16.125,38.268,38.761,46.994,64.049
		c-26.025,22.724-54.207,48.924-75.195,69.98c-34.859,4.512-39.608,27.744-43.08,44.811c-2.956,14.532-4.875,21.558-16.092,22.458
		c-2.764,0.222-5.015,2.308-5.446,5.047c-0.432,2.738,1.069,5.416,3.631,6.477c0.721,0.298,17.877,7.308,37.921,7.309
		c0.003,0,0.005,0,0.007,0c13.968,0,25.95-3.386,35.612-10.063c11.906-8.228,19.979-21.273,24.036-38.767
		c13.713-13.874,29.382-30.604,44.876-47.837C238.845,208.381,225.456,235.833,203.814,257.287z M185.48,225.412
		c-6.358,25.196-22.356,37.968-47.594,37.967c0,0-0.004,0-0.006,0c-6.655,0-13.028-0.908-18.386-2.04
		c6.4-6.527,8.399-16.349,10.13-24.858c3.297-16.208,6.415-31.547,31.923-35.191L185.48,225.412z M268.336,130.652
		c-23.785,28.337-52.575,60.159-76.275,84.354l-3.669-3.698l-16.189-16.317c21.488-21.39,49.054-46.895,74.773-69.216l0,0
		c2.998-2.602,5.977-5.171,8.913-7.675c29.847-25.455,45.489-36.533,53.468-41.354C304.592,84.773,293.616,100.534,268.336,130.652z
		"
                        />
                      </g>
                    </svg>
                    <input type="color" className="ml-3 w-7"></input>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-md border border-gray-500 rounded-md">
          <div className="p-3">
            <button
              type="button"
              className="py-2 px-4 flex justify-center items-center text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
            >
              <svg
                fill="#000000"
                height="20"
                width="20"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 271.99 271.99"
                xmlSpace="preserve"
              >
                <g>
                  <path
                    d="M211.591,164.335c-4.782-1.35-9.757,1.429-11.11,6.211c-7.297,25.798-29.432,44.598-55.486,48.164v-10.078
		c27.722-4.337,49-28.378,49-57.298V58c0-31.981-26.019-58-58-58s-58,26.019-58,58v93.333c0,28.92,21.278,52.961,49,57.298v10.078
		c-26.053-3.565-48.188-22.365-55.486-48.164c-1.353-4.782-6.328-7.563-11.11-6.21c-4.783,1.353-7.563,6.327-6.21,11.11
		c9.482,33.52,38.713,57.723,72.806,61.387v17.157h-9.056c-4.971,0-9,4.029-9,9s4.029,9,9,9h36.112c4.971,0,9-4.029,9-9
		s-4.029-9-9-9h-9.056v-17.157c34.093-3.665,63.325-27.868,72.806-61.389C219.154,170.662,216.374,165.688,211.591,164.335z
		 M95.995,151.333V58c0-22.056,17.944-40,40-40s40,17.944,40,40v93.333c0,22.056-17.944,40-40,40S95.995,173.389,95.995,151.333z"
                  />
                </g>
              </svg>
              Voice On
            </button>

            <button
              type="button"
              className="py-2 mt-3 px-4 flex justify-center items-center text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
            >
              <img
                src="https://github.com/Miracle-Midnight/Drawing-Duo/blob/refactor/ksd/makeLayout/frontend/src/assets/voiceoff.png?raw=true"
                alt="mic"
                className="w-5 h-5"
              />
              Voice Off
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default InGame;
