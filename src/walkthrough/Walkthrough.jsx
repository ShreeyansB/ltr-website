import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { commercial, residential } from "../datastore";
import "aframe";
import "aframe-environment-component";

const Walkthrough = () => {
  const [data, setData] = useState();
  let { buildId } = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [isSet, setIsSet] = useState(false);

  useEffect(() => {
    if (!isSet) {
      var script = document.createElement("script");
      script.src =
        "https://rawgit.com/atomicguy/aframe-fence-component/master/dist/aframe-fence-component.min.js";
      document.getElementsByTagName("head")[0].appendChild(script);
      setIsSet(true);
    }
    let data;
    data = residential.find((i) => i.id === buildId);
    if (!data) {
      data = commercial.find((i) => i.id === buildId);
    }
    if (data === undefined) {
      navigate("/404", { replace: true });
    } else {
      setData(data);
    }

    setTimeout(() => {
      setShowModal(true);
    }, 3000);
  }, []);

  return (
    <Box w="100%" pt="6rem" bg="#2a3245" minH="500px">
      {!data && (
        <Flex w="100%" h="330px">
          <Spinner color="yellow.500" size="xl" margin="auto" />
        </Flex>
      )}
      {data && (
        <Box w="100%" h="600px" bg="red">
          <a-scene
            background="color: black;"
            environment="preset: forest;fog: 0.38; dressing: none;ground: flat;"
          >
            <a-assets>
              <a-asset-item
                id="apartment"
                src={"http://localhost:3000/apt.gltf"}
              ></a-asset-item>
              <a-asset-item
                id="city"
                src={"http://localhost:3000/scene.gltf"}
              ></a-asset-item>

              <a-mixin id="comet" material="color: #59617D"></a-mixin>
              <a-mixin id="cosmic" material="color: #874F70"></a-mixin>
              <a-mixin id="contessa" material="color: #AB4F59"></a-mixin>
              <a-mixin id="tango" material="color: #F28033"></a-mixin>
              <a-mixin id="tamarind" material="color: #321513"></a-mixin>

              <a-mixin
                id="translucent"
                material="transparent: true; opacity: 0.33"
              ></a-mixin>
              <a-mixin id="solid" material="transparent: false"></a-mixin>
            </a-assets>

            {/* <a-entity position="0 1 0" rotation="0 0 0">
              <a-camera fence="width: 9.5; depth: 9.5; x0: -4; z0: 2"></a-camera>
            </a-entity> */}

            <a-entity id="boundaryfence" position="-4 20 2">
              <a-entity id="North" position="0 -1 -5" rotation="0 0 0">
                <a-box
                  height="0.1"
                  width="10"
                  depth="0.1"
                  position="0 -1.25 0"
                  mixin="comet solid"
                ></a-box>
                <a-box
                  height="2.5"
                  width="10"
                  depth="0.01"
                  mixin="comet translucent"
                ></a-box>
                <a-box
                  height="0.1"
                  width="10"
                  depth="0.1"
                  position="0 1.25 0"
                  mixin="comet solid"
                ></a-box>
              </a-entity>
              <a-entity id="South" position="0 -1 5" rotation="0 0 0">
                <a-box
                  height="0.1"
                  width="10"
                  depth="0.1"
                  position="0 -1.25 0"
                  mixin="cosmic solid"
                ></a-box>
                <a-box
                  height="2.5"
                  width="10"
                  depth="0.01"
                  mixin="cosmic translucent"
                ></a-box>
                <a-box
                  height="0.1"
                  width="10"
                  depth="0.1"
                  position="0 1.25 0"
                  mixin="cosmic solid"
                ></a-box>
              </a-entity>
              <a-entity id="East" position="5 -1 0" rotation="0 -90 0">
                <a-box
                  height="0.1"
                  width="10"
                  depth="0.1"
                  position="0 -1.25 0"
                  mixin="contessa solid"
                ></a-box>
                <a-box
                  height="2.5"
                  width="10"
                  depth="0.01"
                  mixin="contessa translucent"
                ></a-box>
                <a-box
                  height="0.1"
                  width="10"
                  depth="0.1"
                  position="0 1.25 0"
                  mixin="contessa solid"
                ></a-box>
              </a-entity>
              <a-entity id="West" position="-5 -1 0" rotation="0 -90 0">
                <a-box
                  height="0.1"
                  width="10"
                  depth="0.1"
                  position="0 -1.25 0"
                  mixin="tango solid"
                ></a-box>
                <a-box
                  height="2.5"
                  width="10"
                  depth="0.01"
                  mixin="tango translucent"
                ></a-box>
                <a-box
                  height="0.1"
                  width="10"
                  depth="0.1"
                  position="0 1.25 0"
                  mixin="tango solid"
                ></a-box>
              </a-entity>
            </a-entity>

            {showModal && (
              <a-entity gltf-model="#apartment" position="4 18.5 0"></a-entity>
            )}

            <a-camera
              fence="width: 9.5; depth: 9.5; x0: -4; z0: 2"
              position="0 20 0"
              wasd-controls="acceleration: 100; fly: false;"
            ></a-camera>

            {showModal && (
              <a-entity gltf-model="#city" position="23 0.25 55"></a-entity>
            )}
          </a-scene>
        </Box>
      )}
    </Box>
  );
};

export default Walkthrough;
