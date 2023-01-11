import cv2
import numpy as np
import sys

def calculate_similarity(image1, image2):
    # Convert the images to grayscale
    # print("============python insult")
    # image_gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    # sketch_gray = cv2.cvtColor(sketch, cv2.COLOR_BGR2GRAY)

    # # Use ORB (Oriented FAST and Rotated BRIEF) to extract features from the images
    # detector = cv2.ORB_create()
    # keypoints_image, descriptors_image = detector.detectAndCompute(image_gray, None)
    # keypoints_sketch, descriptors_sketch = detector.detectAndCompute(sketch_gray, None)

    # # Use the Brute-Force matcher to match the features between the images
    # bf = cv2.BFMatcher(cv2.NORM_HAMMING, crossCheck=True)
    # matches = bf.match(descriptors_image, descriptors_sketch)

    # # Calculate the average distance between the matches
    # distance_sum = 0
    # for match in matches:
    #     distance_sum += match.distance
    # similarity = distance_sum / len(matches)
    
    # return similarity
    # Load the image and sketch
    print('======================='+image1)
    print('======================='+image2)
    # image = KakaoTalk_20221226_000320304_021673182954189.jpg
    image = cv2.imread("../backend/dist/src/common/uploads/profile/KakaoTalk_20221226_000320304_021673182954189.jpg")
    sketch = cv2.imread("../backend/dist/src/common/uploads/profile/KakaoTalk_20221226_000320304_021673182967534.jpg")
    
    # Convert the images to grayscale
    image_gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    sketch_gray = cv2.cvtColor(sketch, cv2.COLOR_BGR2GRAY)
    
    # Use ORB (Oriented FAST and Rotated BRIEF) to extract features from the images
    detector = cv2.ORB_create()
    keypoints_image, descriptors_image = detector.detectAndCompute(image_gray, None)
    keypoints_sketch, descriptors_sketch = detector.detectAndCompute(sketch_gray, None)
    
    # Use the Brute-Force matcher to match the features between the images
    bf = cv2.BFMatcher(cv2.NORM_HAMMING, crossCheck=True)
    matches = bf.match(descriptors_image, descriptors_sketch)
    
    # Calculate the average distance between the matches
    distance_sum = 0
    for match in matches:
        distance_sum += match.distance
    similarity = distance_sum / len(matches)
    print(similarity)
    
if __name__ == '__main__':
    calculate_similarity(sys.argv[1], sys.argv[2])