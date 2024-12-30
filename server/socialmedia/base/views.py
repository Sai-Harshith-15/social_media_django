from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import MyUser
from .serializer import MyUserProfileSerializer

@api_view(['GET'])
def get_user_profile_data(request, pk):
  try:
    try:
      user = MyUser.objects.get(username=pk)
    except MyUser.DoesNotExist:
      return Response({'error':'User does not exist'})
    serializers = MyUserProfileSerializer(user, many=False)
    return Response(serializers.data)
  except:
    return Response({'error':'error getting user data'})