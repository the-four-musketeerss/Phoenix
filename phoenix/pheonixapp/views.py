from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from pheonixapp.models import List
from pheonixapp.serializers import listSerializer
from django.shortcuts import get_object_or_404
from rest_framework import status

class ListView (APIView):
  def get(self, request):
    todos= List.objects.all()
    serializer=listSerializer(todos, many=True)
    return Response(serializer.data)

  def post(self, request):
    serializer=listSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class detailListView(APIView):
  def get(self,request,pk):
    todo=get_object_or_404(List,pk=pk)
    serializer=listSerializer(todo)
    return Response(serializer.data)
  def delete(self,request,pk):
    todo=get_object_or_404(List,pk=pk)
    todo.delete()
    return Response('success')
  

